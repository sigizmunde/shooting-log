import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
`;

export const MenuPanel = styled.div`
  position: absolute;
  ${p => {
    return p.menuAlign === 'right' ? 'right: 0;' : 'left: 0;';
  }}
  top: 0;
  z-index: 2;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 0;
  background-color: var(--back-color-3);
  border-radius: var(--min-gap);
  overflow: hidden;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.button`
  background-color: inherit;
  color: var(--color-1);
  text-transform: uppercase;
  min-height: 18px;
  padding: var(--mid-gap);
  border: none;
  width: auto;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--back-color-2);
  }
`;
