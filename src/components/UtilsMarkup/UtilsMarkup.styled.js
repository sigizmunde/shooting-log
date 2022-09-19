import styled from 'styled-components';
import icons from 'image/icons.svg';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  max-height: 100vh;
  width: 100%;
`;

export const Button = styled.button`
  flex-shrink: 0;
  height: var(--module-size);
  border-radius: calc(var(--module-size) / 2);
  padding: 0 var(--mid-gap);
  background-color: var(--back-color-3);
  color: var(--color-1);
  border: 1px solid var(--back-color-3);
  box-shadow: inset 0px -8px 12px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.184;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :active {
    box-shadow: inset 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const IconButton = styled(Button)`
  width: calc(var(--module-size) * 1.2);
  border-radius: calc(var(--module-size) * 0.6);
  height: calc(var(--module-size) * 1.2);
  padding: calc(var(--min-gap) / 2);
  color: #ffffff7f;
`;

export const Svg = styled.svg`
  fill: currentColor;
  max-width: 100%;
  max-height: 100%;
`;

export const Modal = styled.div`
  position: fixed;
  left: 5%;
  right: 5%;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  overflow-y: auto;
  padding: var(--mid-gap);
  color: var(--back-color-2);
  background-color: var(--inverted-back-color);
  border-radius: calc(var(--module-size) * 1.4);
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #0000007f;
`;

export const Form = styled.form`
  label {
    display: block;
  }
`;

export const Input = styled.input`
  position: relative;
  color: var(--inverted-color);
  background-color: transparent;
  border: none;
  ::after {
    position: absolute;
    left: calc(100% + var(--min-gap));
    content: url(${icons} + '#icon-edit');
    height: 16px;
  }
  :active {
    background-color: var(--color-1);
  }
`;
