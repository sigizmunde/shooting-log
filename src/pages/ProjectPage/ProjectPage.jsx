import DeviceCard from 'components/DeviceCard/DeviceCard';
import DeviceList from 'components/DeviceList/DeviceList';
import Header from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { startRecord, stopRecord } from 'redux/devicesSlice';
import { LayoutContainer } from 'components/UtilsMarkup/UtilsMarkup.styled';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useEffect, useState } from 'react';
import DeviceOptions from 'components/DeviceOptions/DeviceOptions';
import { useCallback } from 'react';
import ProjectOptions from 'components/ProjectOptions/ProjectOptions';

const ProjectPage = () => {
  const devices = useSelector(selectors.getDevices);
  const [active, setActive] = useState([]);
  const [running, setRunning] = useState([]);
  const [paused, setPaused] = useState([]);
  const [currentLimits, setCurrentLimits] = useState([]);
  const [limitWarnings, setLimitWarnings] = useState([]);
  const [mode, setMode] = useState('inactive');

  const [modal, setModal] = useState({
    mode: 0, // 0 - closed, 1 - project settings, 2 - device options
    id: 0, // device or project id
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setRunning(
      devices
        .filter(({ log }) => log.length > 0 && log[log.length - 1].stop === '')
        .map(({ id }) => id)
    );
    setPaused(
      devices
        .filter(({ log, pausable }) => log.length > 0 && pausable)
        .filter(({ log }) => {
          const pauses = log[log.length - 1].pauses;
          if (pauses.length > 0)
            return pauses[pauses.length - 1].type === 'pause';
          return false;
        })
        .map(({ id }) => id)
    );
  }, [devices]);

  useEffect(() => {
    setCurrentLimits(
      devices
        .filter(({ recLimit }) => recLimit > 0)
        .filter(({ id }) => running.includes(id))
        .map(({ id, log, recLimit }) => ({
          id,
          recLimit,
          start: log[log.length - 1].start,
        }))
    );
  }, [devices, running]);

  const checkLimits = useCallback(() => {
    const now = new Date().getTime();
    const idArray = currentLimits.reduce((acc, { id, recLimit, start }) => {
      const startTime = new Date(start);
      const correction = 5000; // to warn 5 seconds beforehand
      if (now - startTime.getTime() > recLimit - correction) acc.push(id);
      return acc;
    }, []);
    setLimitWarnings(idArray);
  }, [currentLimits]);

  useEffect(() => {
    const timer = setInterval(checkLimits, 1000);
    return () => clearInterval(timer);
  }, [checkLimits]);

  useEffect(() => {
    if (active.length === 0) setMode('inactive');
  }, [active]);

  const createNewDevice = () => {
    const dateString = new Date().toISOString();
    setModal({ mode: 2, id: dateString + nanoid() });
  };

  const handleSelect = ({ id, status }) => {
    if (active.includes(id)) {
      setActive(active => active.filter(device_id => device_id !== id));
      return;
    }
    const l = active.length;
    if (l === 0) {
      console.log('l === 0');
      setActive(active => [id]);
      if (status === 'off') {
        setMode('start');
      }
      if (status === 'on') {
        setMode('stop');
      }
    }
    if (l > 0) {
      console.log('l > 0');
      console.log('status', status);
      if (
        (status === 'on' && mode === 'stop') ||
        (status === 'off' && mode === 'start')
      )
        setActive(active => [...active, id]);
      else {
        setActive([]);
      }
    }
  };

  const handleControl = () => {
    active.forEach(device_id => {
      switch (mode) {
        case 'start':
          dispatch(startRecord({ id: device_id }));
          break;
        case 'stop':
          dispatch(stopRecord({ id: device_id }));
          break;
        default:
          break;
      }
    });
    setActive([]);
  };

  const openDeviceOptions = id => {
    setModal({ mode: 2, id: id });
  };

  const openProjectOptions = () => {
    setModal({ mode: 1 });
  };

  const closeModal = () => {
    setModal({ mode: 0, id: null });
  };

  return (
    <LayoutContainer style={{ maxHeight: window.innerHeight }}>
      <Header onProjectOptions={openProjectOptions} />
      <DeviceList>
        {devices.map(({ id, name, pic, color, log, pausable }) => {
          let status = 'off';
          if (running.includes(id)) status = 'on';
          if (paused.includes(id)) status = 'pause';
          return (
            <DeviceCard
              key={id}
              id={id}
              name={name}
              image={pic}
              color={color}
              status={status}
              log={log}
              pausable={pausable}
              active={active.includes(id)}
              warning={limitWarnings.includes(id)}
              onClick={handleSelect}
              onOptions={() => openDeviceOptions(id)}
              expandable={true}
            />
          );
        })}
      </DeviceList>
      <ControlPanel
        mode={mode}
        running={running.length}
        selected={active.length}
        onClick={handleControl}
        onCreateClick={createNewDevice}
      />
      {modal.mode === 2 && (
        <DeviceOptions id={modal.id} closeModal={closeModal} />
      )}
      {modal.mode === 1 && <ProjectOptions closeModal={closeModal} />}
    </LayoutContainer>
  );
};

export default ProjectPage;
