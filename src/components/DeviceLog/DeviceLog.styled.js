import { Button } from 'components/UtilsMarkup/UtilsMarkup.styled';
import styled from 'styled-components';

export const LogList = styled.ul`
  list-style: none;
  margin: var(--mid-gap);
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
