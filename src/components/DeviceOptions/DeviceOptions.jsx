import { Form, Modal, Input } from 'components/UtilsMarkup/UtilsMarkup.styled';
import { useState } from 'react';
import { Picto } from './DeviceOptions.styled';

const pictArray = [
  require('../../image/picto/cinema.png'),
  require('../../image/picto/tv.png'),
  require('../../image/picto/dslr.png'),
  require('../../image/picto/mirrorless.png'),
  require('../../image/picto/compact.png'),
  require('../../image/picto/action.png'),
  require('../../image/picto/smartphone.png'),
  require('../../image/picto/recorder.png'),
];

const DeviceOptions = ({ id }) => {
  const [device, setDevice] = useState({
    id,
    name: 'name',
    info: 'info',
    pic: require('../../image/picto/action.png'),
    color: 'teal',
    pausable: false,
  });

  const handleChange = e => {
    setDevice(device => ({ ...device, [e.target.name]: e.target.value }));
  };

  return (
    <Modal>
      <Form>
        <label htmlFor="pic">
          Icon
          <select
            name="pic"
            id="pic"
            onChange={handleChange}
            value={device.pic}
          >
            {pictArray.map(val => (
              <option key={val} value={val}>
                {val}
                {/* <Picto color={'white'}>
                    <img src={val} alt="device icon" />
                  </Picto> */}
              </option>
            ))}
          </select>{' '}
        </label>
        <label htmlFor="pausable">
          Type
          <select
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
          </select>
        </label>
        <label htmlFor="name">
          Name
          <Input
            name="name"
            id="name"
            value={device.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="info">
          Info
          <textarea
            name="info"
            id="info"
            value={device.info}
            onChange={handleChange}
          />
        </label>
      </Form>
    </Modal>
  );
};

export default DeviceOptions;
