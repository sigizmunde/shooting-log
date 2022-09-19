import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
  max-height: 100vh;
  width: 100%;
`;

export const SectionContainer = styled.div`
  min-height: 0;
  flex-shrink: 1;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
  padding: var(--mid-gap);
`;
