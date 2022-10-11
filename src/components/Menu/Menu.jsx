import { IconButton, Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';
import icons from 'image/icons.svg';
import { useState } from 'react';
import {
  MenuBackdrop,
  MenuContainer,
  MenuItem,
  MenuPanel,
} from './Menu.styled';

const Menu = ({ menuItems, menuAlign }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const closeMenu = () => {
    setMenuIsOpened(false);
  };

  return (
    <>
      {menuIsOpened && <MenuBackdrop onClick={closeMenu} />}
      <MenuContainer>
        {!menuIsOpened && (
          <IconButton type="button" onClick={() => setMenuIsOpened(true)}>
            <Svg>
              <use href={icons + '#icon-settings'} />
            </Svg>
          </IconButton>
        )}
        {menuIsOpened && (
          <MenuPanel menuAlign={menuAlign}>
            {menuItems.map(el => (
              <MenuItem
                type="button"
                key={el[0]}
                onClick={() => {
                  el[1]();
                  closeMenu();
                }}
              >
                {el[0]}
              </MenuItem>
            ))}
          </MenuPanel>
        )}
      </MenuContainer>
    </>
  );
};

export default Menu;
