import { useDispatch } from 'react-redux';
import { pauseRecord, resumeRecord } from 'redux/devicesSlice';
import {
  Caption,
  IndicatorOff,
  IndicatorOn,
  IndicatorPause,
  Panel,
  PauseBtnOff,
  PauseBtnOn,
  Picto,
} from './DeviceCard.styled';

const DeviceCard = ({
  id,
  name,
  color = 'white',
  image,
  active = false,
  pausable = false,
  status = 'off',
  onClick,
}) => {
  const dispatch = useDispatch();

  const resumeRec = (event, id) => {
    event.stopPropagation();
    dispatch(resumeRecord({ id }));
  };

  const pauseRec = (event, id) => {
    event.stopPropagation();
    dispatch(pauseRecord({ id }));
  };

  return (
    <Panel active={active} onClick={() => onClick({ id, status })}>
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
    </Panel>
  );
};

export default DeviceCard;
