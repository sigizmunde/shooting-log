import styled from 'styled-components';

export const ButtonsPanel = styled.div`
  display: flex;
  gap: var(--min-gap);
  margin: var(--min-gap) auto 0;
  @media screen and (min-width: 576px) {
    grid-column: 1 / 3;
  }
`;
