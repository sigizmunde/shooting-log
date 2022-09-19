import DeviceCard from 'components/DeviceCard/DeviceCard';
import DeviceList from 'components/DeviceList/DeviceList';
import Header from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { createDevice, startRecord, stopRecord } from 'redux/devicesSlice';
import {
  LayoutContainer,
  SectionContainer,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { useEffect, useState } from 'react';
import { generateHashColor } from 'utils/colorGenerator';

const ProjectPage = () => {
  const devices = useSelector(selectors.getDevices);
  const [active, setActive] = useState([]);
  const [running, setRunning] = useState([]);
  const [paused, setPaused] = useState([]);
  const [mode, setMode] = useState('inactive');

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
    if (active.length === 0) setMode('inactive');
  }, [active]);

  const createRandomDevice = () => {
    const dateString = new Date().toISOString();
    dispatch(
      createDevice({
        id: nanoid() + dateString,
        name: 'random DSLR' + nanoid(),
        color: generateHashColor(),
        pausable: !!Math.round(Math.random() * 0.85),
      })
    );
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
          return;
        case 'stop':
          dispatch(stopRecord({ id: device_id }));
          return;
        default:
          return;
      }
    });
    setActive([]);
  };

  return (
    <LayoutContainer>
      <Header />
      <SectionContainer>
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
                onClick={handleSelect}
              />
            );
          })}
        </DeviceList>
        <button type="button" onClick={createRandomDevice}>
          Create one more
        </button>
      </SectionContainer>
      <ControlPanel
        mode={mode}
        running={running.length}
        selected={active.length}
        onClick={handleControl}
      />
    </LayoutContainer>
  );
};

export default ProjectPage;
