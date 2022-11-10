import { useState } from 'react';
import { Input, Span } from './HiddenInput.styled';

const HiddenInput = ({ value, highlighted, onChange }) => {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(() => value);

  const handleChange = e => {
    setInputValue(() => e.target.value);
  };

  const submitChanges = e => {
    e.preventDefault();
    onChange(inputValue);
    setEdit(false);
  };

  const discardChanges = () => {
    setInputValue(() => value);
    setEdit(false);
  };

  const handleClick = () => {
    setEdit(true);
  };

  return (
    <>
      {!edit && (
        <Span highlighted={highlighted} onClick={handleClick}>
          {value}
        </Span>
      )}
      {edit && (
        <form onSubmit={submitChanges}>
          <Input
            autoFocus
            value={inputValue}
            onChange={handleChange}
            onBlur={discardChanges}
          />
        </form>
      )}
    </>
  );
};

export default HiddenInput;
