import styled from 'styled-components';

export const ButtonsPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--min-gap);
  margin: var(--min-gap) auto 0;
  @media screen and (min-width: 576px) {
    grid-column: 1 / 3;
  }
`;
