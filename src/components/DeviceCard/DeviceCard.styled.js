import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--min-gap);
  width: 100%;
  min-height: calc(var(--module-size) * 2);
  padding: calc(var(--min-gap) / 2);
  border-radius: var(--module-size);
  background-color: var(--back-color-2);
  box-shadow: ${p =>
    p.active ? '0px 0px 8px 4px var(--accent-color)' : 'none'};
`;

export const Picto = styled.div`
  background-color: ${p => p.color};
  background-image: url(${p => p.image});
  width: calc(var(--module-size) * 2 - var(--min-gap));
  height: calc(var(--module-size) * 2 - var(--min-gap));
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`;

export const Caption = styled.div`
  margin-right: auto;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  flex-shrink: 1;
`;

export const PauseBtnOff = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  background: #bb9d00;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 4px 4px rgba(255, 255, 255, 0.25),
    inset -2px -4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
`;

export const PauseBtnOn = styled(PauseBtnOff)`
  background: #ffd600;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.25),
    inset -2px -4px 4px 4px rgba(230, 138, 0, 0.5);
  * {
    filter: drop-shadow(0px 0px 2px #ffffff);
  }
`;

export const IndicatorOn = styled.div`
  margin-right: calc(var(--module-size) - var(--min-gap) / 2 - 9.5px);
  width: 19px;
  height: 19px;
  background: #00ff47;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.25),
    inset -2px -4px 8px 4px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  flex-shrink: 0;
`;

export const IndicatorOff = styled(IndicatorOn)`
  background: #46661d;
`;

export const IndicatorPause = styled(IndicatorOn)`
  background: #ffd600;
`;
