import Graph from 'components/Graph/Graph';
import {
  H2,
  IconButton,
  LayoutContainer,
  Svg,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import {
  GraphContainer,
  GraphControlsContainer,
  GraphHeader,
} from './GraphPage.styled';
import icons from '../../image/icons.svg';
import { useNavigate } from 'react-router-dom';

const GraphPage = () => {
  const navigate = useNavigate();
  const currentProject = useSelector(selectors.getProject);
  const [scale, setScale] = useState(100);

  const decScale = () => {
    setScale(scale => {
      return scale > 50 ? scale / 1.5 : 30;
    });
  };

  const incScale = () => {
    setScale(scale => {
      return scale < 2400 ? scale * 1.5 : 2400;
    });
  };

  return (
    <LayoutContainer style={{ maxHeight: window.innerHeight }}>
      {' '}
      <>
        <GraphHeader>
          <IconButton type="button" onClick={() => navigate(-1)}>
            <Svg style={{ transform: 'rotate(90deg)', paddingTop: '4px' }}>
              <use href={icons + '#icon-arrow-down'} />
            </Svg>
          </IconButton>
          <H2>Time graph for {currentProject.name}</H2>
        </GraphHeader>
        <GraphContainer>
          <Graph scale={scale} />{' '}
        </GraphContainer>
        <GraphControlsContainer>
          <IconButton onClick={decScale}>-</IconButton> Scale
          <IconButton onClick={incScale}>+</IconButton>
        </GraphControlsContainer>
      </>
    </LayoutContainer>
  );
};

export default GraphPage;
