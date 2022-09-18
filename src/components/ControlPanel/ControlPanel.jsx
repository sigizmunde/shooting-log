import {
  InactiveKnob,
  Panel,
  PanelContainer,
  PauseKnob,
  StartKnob,
  StopKnob,
} from './ControlPanel.styled';

const ControlPanel = ({ selected, running, mode, onClick }) => {
  return (
    <Panel>
      <PanelContainer>
        <p>{selected} selected</p>
        {mode === 'pause' ? (
          <PauseKnob onClick={onClick}>Pause</PauseKnob>
        ) : mode === 'stop' ? (
          <StopKnob onClick={onClick}>Stop</StopKnob>
        ) : mode === 'start' ? (
          <StartKnob onClick={onClick}>Start</StartKnob>
        ) : (
          <InactiveKnob>Choose</InactiveKnob>
        )}
        <p>{running} running</p>
      </PanelContainer>
    </Panel>
  );
};

export default ControlPanel;
