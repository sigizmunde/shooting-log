import {
  HeaderContainer,
  HeaderSection,
  HeaderString,
  Title,
} from './Header.styled';
import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const { id, name, owner, date } = useSelector(selectors.getProject);

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
            {id}
            <button type="button">edit</button>
          </div>
        </HeaderString>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
