import HiddenInput from 'components/HiddenInput/HiddenInput';
import { useDispatch } from 'react-redux';
import { updateRecord } from 'redux/devicesSlice';
import { showTime } from 'utils/dateTimeFunctions';
import { Li, Span } from './LogItem.styled';

const LogItem = ({ id, item }) => {
  const dispatch = useDispatch();

  const handleChange = ({ ...properties }) => {
    const record = { ...item, ...properties };
    dispatch(updateRecord({ id, record }));
  };

  const changeName = value => {
    handleChange({ file: { name: value, confirmed: true } });
  };

  return (
    <Li>
      <HiddenInput
        value={item.file?.name || 'no name'}
        highlighted={!item.file?.confirmed}
        onChange={changeName}
      />
      <Span>{showTime(item.start)}</Span> -
      <Span>{item.stop ? showTime(item.stop) : '---'}</Span>
    </Li>
  );
};

export default LogItem;
