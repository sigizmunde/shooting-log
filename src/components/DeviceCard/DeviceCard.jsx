import { useDispatch } from 'react-redux';
import { pauseRecord, resumeRecord } from 'redux/devicesSlice';
import {
  Caption,
  ExpandBtn,
  IndicatorOff,
  IndicatorOn,
  IndicatorPause,
  Panel,
  PauseBtnOff,
  PauseBtnOn,
  Picto,
} from './DeviceCard.styled';
import icons from 'image/icons.svg';
import { Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';

const DeviceCard = ({
  id,
  name,
  color = 'white',
  image,
  active = false,
  pausable = false,
  status = 'off',
  onClick = () => null,
  onOptions = () => null,
  expandable = false,
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

  const openOptions = (event, id) => {
    event.stopPropagation();
    onOptions(id);
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
      {expandable && (
        <ExpandBtn onClick={e => openOptions(e, id)}>
          <Svg>
            <use href={icons + '#icon-arrow-down'} />
          </Svg>
        </ExpandBtn>
      )}
    </Panel>
  );
};

export default DeviceCard;
