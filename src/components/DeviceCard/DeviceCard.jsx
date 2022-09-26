import { useDispatch } from 'react-redux';
import { pauseRecord, removeDevice, resumeRecord } from 'redux/devicesSlice';
import {
  Caption,
  DeviceInfo,
  ExpandBtn,
  IndicatorOff,
  IndicatorOn,
  IndicatorPause,
  Panel,
  PauseBtnOff,
  PauseBtnOn,
  Picto,
  ShrinkBtn,
} from './DeviceCard.styled';
import icons from 'image/icons.svg';
import { Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import DeviceLog from 'components/DeviceLog/DeviceLog';

const DeviceCard = ({
  id,
  name,
  color = 'white',
  image,
  active = false,
  warning = false,
  pausable = false,
  status = 'off',
  log = [],
  onClick = () => null,
  onOptions = () => null,
  expandable = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const resumeRec = (event, id) => {
    event.stopPropagation();
    dispatch(resumeRecord({ id }));
  };

  const pauseRec = (event, id) => {
    event.stopPropagation();
    dispatch(pauseRecord({ id }));
  };

  const openOptions = event => {
    event.stopPropagation();
    toggleExpand();
  };

  const toggleExpand = () => {
    setExpanded(expanded => !expanded);
  };

  const handleDeleteDevice = id => {
    const reply = prompt('Are you sure? Type "yes" to delete device', 'no')
      .trim()
      .toLowerCase();
    if (reply === 'yes') {
      dispatch(removeDevice({ id }));
    }
  };

  return (
    <Panel active={active} warning={warning}>
      <DeviceInfo onClick={() => onClick({ id, status })}>
        <Picto image={image} color={color} />
        <Caption>
          <p>{name}</p>
        </Caption>
        {pausable && status === 'pause' && (
          <PauseBtnOn onClick={e => resumeRec(e, id)}></PauseBtnOn>
        )}{' '}
        {pausable && status === 'on' && (
          <PauseBtnOff onClick={e => pauseRec(e, id)}></PauseBtnOff>
        )}
        {status === 'on' ? (
          <IndicatorOn />
        ) : status === 'pause' ? (
          <IndicatorPause />
        ) : (
          <IndicatorOff />
        )}
      </DeviceInfo>
      {expandable && !expanded && (
        <ExpandBtn onClick={e => openOptions(e, id)}>
          <Svg>
            <use href={icons + '#icon-arrow-down'} />
          </Svg>
        </ExpandBtn>
      )}
      {expandable && expanded && (
        <>
          <DeviceLog
            log={log}
            handleOptions={() => onOptions(id)}
            handleDeleteDevice={() => handleDeleteDevice(id)}
          />
          <ShrinkBtn onClick={toggleExpand}>
            <Svg style={{ transform: 'rotate(180deg)' }}>
              <use href={icons + '#icon-arrow-down'} />
            </Svg>
          </ShrinkBtn>
        </>
      )}
    </Panel>
  );
};

export default DeviceCard;
