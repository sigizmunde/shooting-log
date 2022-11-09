import LogItem from 'components/LogItem/LogItem';
import { useDispatch } from 'react-redux';
import { removeDevice } from 'redux/devicesSlice';
import { LogList, FlexButtons, OptButton } from './DeviceLog.styled';

const DeviceLog = ({ id, log, handleOptions }) => {
  const dispatch = useDispatch();

  const handleDeleteDevice = () => {
    const reply = prompt('Are you sure? Type "yes" to delete device', 'no')
      ?.trim()
      .toLowerCase();
    if (reply === 'yes') {
      dispatch(removeDevice({ id }));
    }
  };

  return (
    <>
      {log.length > 0 && (
        <LogList>
          {log.map(item => (
            <LogItem key={item.rec_id} id={id} item={item} />
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
