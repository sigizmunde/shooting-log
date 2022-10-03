import Graph from 'components/Graph/Graph';
import {
  IconButton,
  LayoutContainer,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { GraphContainer, GraphControlsContainer } from './GraphPage.styled';

const GraphPage = () => {
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
    <LayoutContainer>
      {' '}
      <>
        <h2>Time graph for {currentProject.name}</h2>
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
