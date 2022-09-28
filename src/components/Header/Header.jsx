import {
  HeaderContainer,
  HeaderSection,
  HeaderString,
  InfoLabels,
  Title,
} from './Header.styled';
import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import { IconButton, Svg } from 'components/UtilsMarkup/UtilsMarkup.styled';
import { showTime } from 'utils/dateTimeFunctions';
import icons from 'image/icons.svg';

const Header = ({ onProjectOptions }) => {
  const { name, owner, date } = useSelector(selectors.getProject);

  return (
    <HeaderSection>
      <HeaderContainer>
        <Title>Shooting Log</Title>

        <HeaderString>
          <div>
            <div>
              <InfoLabels>Project: </InfoLabels>
              {name}
            </div>
            <div>
              <InfoLabels>Created: </InfoLabels>
              {showTime(date)}
            </div>
            {owner && (
              <div>
                <InfoLabels>Project owner: </InfoLabels>
                {owner}
              </div>
            )}
          </div>{' '}
          <div>
            <IconButton type="button" onClick={onProjectOptions}>
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
