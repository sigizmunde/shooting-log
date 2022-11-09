import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import predictFileName from 'utils/predictFileName';

const initialLogRecord = {
  rec_id: null,
  file: { name: 'no file name', confirmed: false },
  start: '',
  stop: '',
  pauses: [],
};

const initialDevice = {
  id: 0,
  name: '',
  info: '',
  pic: require('image/picto/action.png'),
  color: 'teal',
  pausable: false,
  recLimit: 0,
  timeOffset: 0,
  log: [],
};

const initialState = [];

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    clearDevices() {
      const newState = [];
      return newState;
    },
    setDevices(_, { payload }) {
      return payload;
    },
    createDevice(state, { payload }) {
      return [...state, { ...initialDevice, ...payload }];
    },
    updateDevice(state, { payload }) {
      // if no device id found creates new device
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return [...state, { ...initialDevice, ...payload }];
      const newState = [...state];
      newState[index] = { ...newState[index], ...payload };
      return newState;
    },
    removeDevice(state, { payload }) {
      return state.filter(({ id }) => id !== payload.id);
    },
    startRecord(state, { payload }) {
      // payload = {id, file: {name, confirmed}}
      const date = new Date().toISOString();
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      const currentLog = state[index].log;
      const predictedName = predictFileName(
        currentLog[currentLog.length - 1]?.file.name || null
      );
      const predictedFile = { name: predictedName, confirmed: false };
      const newRecord = {
        ...initialLogRecord,
        file: payload.file || predictedFile,
      };
      currentLog.push({ ...newRecord, rec_id: nanoid(12), start: date });
    },
    stopRecord(state, { payload }) {
      // payload = {id}
      const date = new Date().toISOString();
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      state[index].log[state[index].log.length - 1].stop = date;
    },
    updateRecord(state, { payload }) {
      // payload = {id, record<rec_id, ...>}
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      const currentLog = state[index].log;
      const logIndex = currentLog.findIndex(
        ({ rec_id }) => rec_id === payload.record.rec_id
      );
      if (logIndex === -1) return state;
      currentLog[logIndex] = {
        ...currentLog[logIndex],
        ...payload.record,
      };
      // suggesting names for the following records
      for (let i = logIndex + 1; i < currentLog.length; i += 1) {
        if (currentLog.file && currentLog.file.confirmed) break;
        const newName = predictFileName(currentLog[i - 1].file.name);
        currentLog[i] = {
          ...currentLog[i],
          file: { name: newName, confirmed: false },
        };
      }
    },
    pauseRecord(state, { payload }) {
      // payload = {id}
      const date = new Date().toISOString();
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      state[index].log[state[index].log.length - 1].pauses.push({
        date: date,
        type: 'pause',
      });
    },
    resumeRecord(state, { payload }) {
      // payload = {id}
      const date = new Date().toISOString();
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      state[index].log[state[index].log.length - 1].pauses.push({
        date: date,
        type: 'resume',
      });
    },
  },
});

export const {
  clearDevices,
  setDevices,
  createDevice,
  updateDevice,
  removeDevice,
  startRecord,
  stopRecord,
  updateRecord,
  pauseRecord,
  resumeRecord,
} = devicesSlice.actions;
export default devicesSlice.reducer;
