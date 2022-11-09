import styled from 'styled-components';

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

export const Input = styled.input`
  width: 100%;
`;
