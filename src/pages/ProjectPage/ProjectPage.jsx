import DeviceCard from 'components/DeviceCard/DeviceCard';
import DeviceList from 'components/DeviceList/DeviceList';
import Header from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { createDevice } from 'redux/devicesSlice';
import { SectionContainer } from 'components/UtilsMarkup/UtilsMarkup.styled';

const ProjectPage = () => {
  const devices = useSelector(selectors.getDevices);

  const dispatch = useDispatch();

  const createRandomDevice = () => {
    const dateString = new Date().toISOString();
    dispatch(
      createDevice({
        id: nanoid() + dateString,
        name: 'random DSLR' + nanoid(),
        color: 'blue',
      })
    );
  };

  return (
    <>
      <Header />
      <SectionContainer>
        <DeviceList>
          {devices.map(({ id, name, pic, color, log }) => {
            return (
              <DeviceCard
                key={id}
                id={id}
                name={name}
                image={pic}
                color={color}
              />
            );
          })}
        </DeviceList>
        <button type="button" onClick={createRandomDevice}>
          Create one more
        </button>
      </SectionContainer>
    </>
  );
};

export default ProjectPage;
