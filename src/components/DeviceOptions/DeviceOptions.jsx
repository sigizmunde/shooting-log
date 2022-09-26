import {
  Form,
  Modal,
  Input,
  Select,
  Textarea,
  Svg,
  Backdrop,
  Button,
  LabelInline,
  LabelGroup,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import icons from 'image/icons.svg';
import DeviceCard from 'components/DeviceCard/DeviceCard';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { ButtonsPanel } from './DeviceOptions.styled';
import { updateDevice } from 'redux/devicesSlice';
import { generateHashColor } from 'utils/colorGenerator';
import { useRef } from 'react';

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
    color: generateHashColor(),
    pausable: false,
    recLimit: 0,
  };

  const savedDevice =
    useSelector(selectors.getDevices).find(el => el.id === id) || tempDevice;

  const [device, setDevice] = useState(savedDevice);

  const limitMinRef = useRef();
  const limitSecRef = useRef();

  const handleChange = e => {
    console.log(e.target.value);
    if (e.target.name === 'limitMin' || e.target.name === 'limitSec') {
      const milliseconds =
        limitMinRef.current.value * 60000 + limitSecRef.current.value * 1000;
      setDevice(device => ({
        ...device,
        recLimit: milliseconds,
      }));
      return;
    }
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
          <div>
            <p>Rec length limit (0 is no limit)</p>
            <LabelGroup>
              <LabelInline htmlFor="limitMin">
                <Input
                  type="number"
                  id="limitMin"
                  name="limitMin"
                  value={Math.floor(device.recLimit / 60000)}
                  step="1"
                  min="0"
                  max="60"
                  ref={limitMinRef}
                  onChange={handleChange}
                />
                min
                <Svg height={16} width={16}>
                  <use href={icons + '#icon-edit'} />
                </Svg>
              </LabelInline>
              <LabelInline htmlFor="limitSec">
                <Input
                  type="number"
                  id="limitSec"
                  name="limitSec"
                  value={(device.recLimit % 60000) / 1000}
                  step="1"
                  min="0"
                  max="59"
                  ref={limitSecRef}
                  onChange={handleChange}
                />
                sec
                <Svg height={16} width={16}>
                  <use href={icons + '#icon-edit'} />
                </Svg>
              </LabelInline>
            </LabelGroup>
          </div>
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
