import { Button } from 'components/UtilsMarkup/UtilsMarkup.styled';
import styled from 'styled-components';

export const LogList = styled.ul`
  list-style: none;
  margin: var(--mid-gap);
  li {
    margin-top: calc(var(--min-gap) / 2);
    /* display: flex; */
    display: grid;
    grid-template-columns: 4fr 3fr 0.5fr 3fr;
    gap: var(--min-gap);
  }
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

export const FlexButtons = styled.div`
  width: 100%;
  margin-bottom: var(--min-gap);
  display: flex;
  justify-content: center;
  gap: var(--mid-gap);
`;

export const OptButton = styled(Button)`
  text-transform: none;
`;
