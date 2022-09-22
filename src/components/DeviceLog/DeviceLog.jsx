import { Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';
import { showTime } from 'utils/dateTimeFunctions';
import {
  LogList,
  Span,
  FlexButtons,
  OptButton,
  ShrinkBtn,
} from './DeviceLog.styled';
import icons from 'image/icons.svg';

const DeviceLog = ({ log, handleOptions, handleClose, handleDeleteDevice }) => {
  return (
    <>
      {log.length > 0 && (
        <LogList>
          {log.map(item => (
            <li key={item.start}>
              <Span highlighted={!item.file?.confirmed}>
                {item.file?.name || 'no name'}
              </Span>
              <Span>{showTime(item.start)}</Span> -
              <Span>{item.stop ? showTime(item.stop) : '---'}</Span>
            </li>
          ))}
        </LogList>
      )}
      <FlexButtons>
        <OptButton type="button" onClick={handleOptions}>
          settings
        </OptButton>{' '}
        <OptButton type="button" onClick={handleDeleteDevice}>
          delete device
        </OptButton>
      </FlexButtons>
      <ShrinkBtn onClick={handleClose}>
        <Svg style={{ transform: 'rotate(180deg)' }}>
          <use href={icons + '#icon-arrow-down'} />
        </Svg>
      </ShrinkBtn>
    </>
  );
};

export default DeviceLog;
