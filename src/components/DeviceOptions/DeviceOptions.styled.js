import styled from 'styled-components';

export const Picto = styled.div`
  background-color: ${p => p.color};
  background-image: url(${p => p.image});
  width: calc(var(--module-size) * 2 - var(--min-gap));
  height: calc(var(--module-size) * 2 - var(--min-gap));
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;
