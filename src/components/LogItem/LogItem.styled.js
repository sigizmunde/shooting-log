import styled from 'styled-components';

export const Li = styled.li`
  margin-top: calc(var(--min-gap) / 2);
  display: grid;
  grid-template-columns: 4fr 3fr 0.5fr 3fr;
  gap: var(--min-gap);
`;

export const Span = styled.span`
  ${p => p.highlighted && 'color: var(--accent-color)'};
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;

  &:first-child {
    flex-shrink: 0;
    margin-right: auto;
  }
`;
