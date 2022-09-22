import styled from 'styled-components';

export const List = styled.section`
  flex-shrink: 1;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--min-gap);
  margin: 0 auto;
  padding: calc(var(--mid-gap) + var(--min-gap));
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  overflow-y: auto;
`;
