import { store } from 'redux/store';
import { showUnderlinedDate } from './dateTimeFunctions';

export const saveToFile = (content, fileName, contentType = 'text/plain') => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};

export const saveStoreToFile = () => {
  const state = store.getState();
  const fileContent = JSON.stringify({
    ...state.project,
    devices: [...state.devices],
  });
  const fileName = state.project.name + showUnderlinedDate(state.project.date);
  saveToFile(fileContent, fileName);
};
