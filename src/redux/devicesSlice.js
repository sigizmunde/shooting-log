import { createSlice } from '@reduxjs/toolkit';

const initialLogRecord = {
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
      const newRecord = { ...initialLogRecord, file: payload.file };
      state[index].log.push({ ...newRecord, start: date });
    },
    stopRecord(state, { payload }) {
      // payload = {id}
      const date = new Date().toISOString();
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      state[index].log[state[index].log.length - 1].stop = date;
    },
    updateRecord(state, { payload }) {
      // payload = {id, start, ...}
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      const logIndex = state[index].log.findIndex(
        ({ start }) => start === payload.start
      );
      state[index].log[logIndex] = payload;
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
