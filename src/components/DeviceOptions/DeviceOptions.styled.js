import styled from 'styled-components';

export const ButtonsPanel = styled.div`
  display: flex;
  gap: var(--mid-gap);
  margin: var(--mid-gap) auto;
  @media screen and (min-width: 576px) {
    grid-column: 1 / 3;
  }
`;
