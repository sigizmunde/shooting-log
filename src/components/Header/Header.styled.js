import styled from 'styled-components';

export const HeaderSection = styled.header`
  width: 100%;
  background-color: var(--back-color-2);
  color: var(--color-1);
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--mid-gap) calc(var(--mid-gap) * 2);
`;

export const Title = styled.h1`
  font-family: var(--font-family-1);
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: calc(55 / 42);
  text-align: center;
  text-transform: none;
  color: var(--back-color-3);
`;

export const HeaderString = styled.div`
  margin-top: var(--min-gap);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: (--min-gap);
`;
