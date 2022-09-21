import {
  Form,
  Modal,
  Input,
  Select,
  Textarea,
  Svg,
  Backdrop,
  Button,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import icons from 'image/icons.svg';
import DeviceCard from 'components/DeviceCard/DeviceCard';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { ButtonsPanel } from './DeviceOptions.styled';
import { updateDevice } from 'redux/devicesSlice';

const pictArray = [
  { src: require('../../image/picto/cinema.png'), name: 'cinema camera' },
  { src: require('../../image/picto/tv.png'), name: 'tv camera' },
  { src: require('../../image/picto/dslr.png'), name: 'dslr camera' },
  {
    src: require('../../image/picto/mirrorless.png'),
    name: 'mirrorless camera',
  },
  { src: require('../../image/picto/compact.png'), name: 'compact camera' },
  { src: require('../../image/picto/action.png'), name: 'action camera' },
  { src: require('../../image/picto/smartphone.png'), name: 'smartphone' },
  { src: require('../../image/picto/recorder.png'), name: 'recorder' },
];

const DeviceOptions = ({ id, closeModal }) => {
  const tempDevice = {
    id,
    name: 'name',
    info: 'info',
    pic: require('../../image/picto/action.png'),
    color: 'teal',
    pausable: false,
  };

  const savedDevice =
    useSelector(selectors.getDevices).find(el => el.id === id) || tempDevice;

  const [device, setDevice] = useState(savedDevice);

  const handleChange = e => {
    setDevice(device => ({ ...device, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateDevice(device));
    closeModal();
  };

  return (
    <Backdrop>
      <Modal>
        <DeviceCard
          id={id}
          name={device.name}
          color={device.color}
          image={device.pic}
          pausable={device.pausable}
          onClick={() => null}
        />
        <Form onSubmit={handleSubmit}>
          <label htmlFor="pic">
            Icon
            <Select
              name="pic"
              id="pic"
              onChange={handleChange}
              value={device.pic}
            >
              {pictArray.map(val => (
                <option key={val.src} value={val.src}>
                  {val.name}
                </option>
              ))}
            </Select>{' '}
          </label>

          <label htmlFor="pausable">
            Type
            <Select
              name="pausable"
              id="pausable"
              onChange={handleChange}
              value={device.pausable}
            >
              <option id="false" value={false}>
                not pausable
              </option>
              <option id="true" value={true}>
                pausable
              </option>
            </Select>
          </label>

          <label htmlFor="name">
            Name
            <Svg height={16} width={16}>
              <use href={icons + '#icon-edit'} />
            </Svg>
            <Input
              name="name"
              id="name"
              value={device.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="info">
            Info
            <Svg height={16} width={16}>
              <use href={icons + '#icon-edit'} />
            </Svg>
            <br />
            <Textarea
              name="info"
              id="info"
              value={device.info}
              onChange={handleChange}
            />
          </label>
          <ButtonsPanel>
            <Button type="submit">Save</Button>
            <Button type="button" onClick={closeModal}>
              Cancel
            </Button>
          </ButtonsPanel>
        </Form>
      </Modal>
    </Backdrop>
  );
};

export default DeviceOptions;
