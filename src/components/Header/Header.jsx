import {
  HeaderContainer,
  HeaderSection,
  HeaderString,
  InfoLabels,
  Title,
} from './Header.styled';
import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';
import {
  DivFlex,
  IconButton,
  Svg,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { showDate } from 'utils/dateTimeFunctions';
import icons from 'image/icons.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({ onProjectOptions }) => {
  const navigate = useNavigate();
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
              {showDate(date)}
            </div>
            {owner && (
              <div>
                <InfoLabels>Project owner: </InfoLabels>
                {owner}
              </div>
            )}
          </div>{' '}
          <DivFlex>
            <IconButton type="button" onClick={() => navigate('/graph')}>
              <Svg>
                <use href={icons + '#icon-graph'} />
              </Svg>
            </IconButton>
            <IconButton type="button" onClick={onProjectOptions}>
              <Svg>
                <use href={icons + '#icon-settings'} />
              </Svg>
            </IconButton>
          </DivFlex>
        </HeaderString>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
