import styled from 'styled-components';

export const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  background-color: var(--inverted-back-color);
  color: var(--inverted-color);
  cursor: grab;
  position: relative;
`;

export const GraphControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--mid-gap);
  padding: var(--mid-gap);
`;
