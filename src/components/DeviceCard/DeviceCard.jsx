import {
  Caption,
  IndicatorOff,
  IndicatorOn,
  IndicatorPause,
  Panel,
  Picto,
} from './DeviceCard.styled';

const DeviceCard = ({
  id,
  name,
  color = 'white',
  image,
  active = false,
  status = 'off',
  onClick,
}) => {
  return (
    <Panel active={active} onClick={() => onClick({ id, status })}>
      <Picto image={image} color={color} />
      <Caption>
        <p>{name}</p>
      </Caption>
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
