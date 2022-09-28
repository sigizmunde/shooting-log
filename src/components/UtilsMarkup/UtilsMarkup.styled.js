import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100vh;
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
  margin: 0;
`;

export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 540px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;
  padding: var(--mid-gap);
  color: var(--back-color-2);
  background-color: var(--inverted-back-color);
  border-radius: calc(var(--module-size) * 1.4);
  backdrop-filter: blur(2px);
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color: #0000007f;
`;

export const Form = styled.form`
  padding: var(--mid-gap);
  display: grid;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: var(--mid-gap);
  label {
    display: block;
  }
`;

export const Input = styled.input`
  position: relative;
  color: var(--inverted-color);
  background-color: transparent;
  border: none;
  :active {
    background-color: var(--color-1);
  }
`;

export const Select = styled.select`
  max-width: 100%;
  color: var(--inverted-color);
  background-color: transparent;
  border: none;
  :active {
    background-color: var(--color-1);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  color: var(--inverted-color);
  background-color: transparent;
  border: none;
  :active {
    background-color: var(--color-1);
  }
`;

export const LabelGroup = styled.div`
  display: flex;
  gap: var(--min-gap);
`;

export const LabelInline = styled.label`
  width: 50%;
`;

export const H3 = styled.h3`
  font-family: var(--font-family-1);
  font-weight: 700;
  text-align: center;
`;

export const H2 = styled.h3`
  font-size: calc(var(--font-size) * 1.5);
  font-family: var(--font-family-1);
  font-weight: 700;
  text-align: center;
`;
