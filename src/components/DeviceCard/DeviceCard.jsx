import {
  Caption,
  IndicatorOff,
  IndicatorOn,
  IndicatorPause,
  Panel,
  Picto,
} from './DeviceCard.styled';

const DeviceCard = ({
  name,
  color = 'white',
  image,
  active = false,
  status = 'off',
  onClick = e => console.log(e.target),
}) => {
  return (
    <Panel active={active} onClick={onClick}>
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
