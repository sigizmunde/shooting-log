import {
  HeaderContainer,
  HeaderSection,
  HeaderString,
  Title,
} from './Header.styled';
import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import icons from 'image/icons.svg';
import { IconButton, Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';

const Header = () => {
  const { name, owner, date } = useSelector(selectors.getProject);

  return (
    <HeaderSection>
      <HeaderContainer>
        <Title>Shooting Log</Title>
        <HeaderString>
          <div>{date}</div>
          <div>{owner}</div>
        </HeaderString>
        <HeaderString>
          <div>{name}</div>
          <div>
            <IconButton type="button">
              <Svg>
                <use href={icons + '#icon-settings'} />
              </Svg>
            </IconButton>
          </div>
        </HeaderString>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
