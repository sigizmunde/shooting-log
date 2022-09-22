import { showTime } from 'utils/dateTimeFunctions';
import { LogList, Span, FlexButtons, OptButton } from './DeviceLog.styled';

const DeviceLog = ({ log, handleOptions, handleDeleteDevice }) => {
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
    </>
  );
};

export default DeviceLog;
