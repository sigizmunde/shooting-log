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
import { saveStoreToFile } from 'utils/saveToFile';
import Menu from 'components/Menu/Menu';
import { loadStoreFromFile } from 'utils/loadFromFile';

const Header = ({ onProjectOptions }) => {
  const navigate = useNavigate();
  const { name, owner, date } = useSelector(selectors.getProject);

  const saveFile = () => {
    if (window.confirm('This will save a log file to your device'))
      saveStoreToFile();
  };

  const openFile = () => {
    if (
      window
        .prompt('This will close current project. Type "yes" to proceed')
        .toLowerCase()
        .trim() === 'yes'
    )
      loadStoreFromFile();
  };

  const menuItems = [
    ['Project settings', onProjectOptions],
    ['Save to file', saveFile],
    ['Open from file', openFile],
  ];

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
            <Menu menuItems={menuItems} menuAlign="right" />
          </DivFlex>
        </HeaderString>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
