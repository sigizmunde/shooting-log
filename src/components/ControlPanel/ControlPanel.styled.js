import { IconButton } from 'components/UtilsMarkup/UtilsMarkup.styled';
import styled from 'styled-components';

export const Panel = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: var(--back-color-1);
`;

export const PanelContainer = styled.div`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--max-gap) var(--max-gap) calc(var(--max-gap) * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--min-gap);
`;

export const StartKnob = styled.div`
  width: 87px;
  height: 87px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-2);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: #000;
  background-color: #f35b5b;
  border-radius: 50%;
  cursor: pointer;
`;

export const InactiveKnob = styled(StartKnob)`
  color: var(--back-color-3);
  background: var(--back-color-2);
  box-shadow: none;
  cursor: default;
`;

export const StopKnob = styled(StartKnob)`
  color: #ff8f60;
  background: #c20000;
  box-shadow: inset 0px 0px 4px 4px rgba(255, 234, 126, 0.25);
`;

export const PauseKnob = styled(StartKnob)`
  color: #ffea7e;
  background: #bb9d00;
  box-shadow: inset 0px 0px 16px rgba(255, 255, 255, 0.5);
`;

export const CreateCameraButton = styled(IconButton)`
  --radius: calc(var(--module-size) * 1.2);
  width: var(--radius);
  height: var(--radius);
  padding: 0;
  border-radius: calc(var(--radius) / 2);
  position: absolute;
  right: var(--max-gap);
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 0;

  font-family: var(--font-family-1);
  font-style: normal;
  font-weight: 700;
  font-size: calc(var(--radius) / 1.5);
  line-height: 1.33;
`;
