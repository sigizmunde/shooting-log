import { store } from 'redux/store';
import { createProject } from 'redux/projectSlice';
import { setDevices } from 'redux/devicesSlice';

const setStore = JSONData => {
  try {
    const { id, name, info, owner, date, devices } = JSONData;
    store.dispatch(createProject({ id, name, info, owner, date }));
    store.dispatch(setDevices(devices));
  } catch (err) {
    console.log(err);
    alert('Wrong file format');
  }
};

const processFile = e => {
  const [file] = e.target.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      try {
        const fileData = JSON.parse(e.target.result);
        setStore(fileData);
      } catch (err) {
        console.log(err);
        alert('Unable to decode file');
      }
    });
    reader.readAsText(file);
  } else {
    return null;
  }
};

const loadFile = (contentType = 'text/plain') => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.txt, .json';
  fileInput.addEventListener('change', processFile);
  fileInput.click();
};

export const loadStoreFromFile = () => {
  loadFile();
};
