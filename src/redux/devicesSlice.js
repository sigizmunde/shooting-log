import { createSlice } from '@reduxjs/toolkit';

const initialLogRecord = {
  file: { name: 'no file name', confirmed: false },
  start: new Date().toISOString(),
  stop: '',
  pauses: [],
};

const initialDevice = {
  id: 0,
  name: '',
  info: '',
  pic: 'logo192.png',
  color: 'teal',
  pauses: false,
  timeOffset: 0,
  log: [],
};

const initialState = [];

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    createDevice(state, { payload }) {
      return [...state, { ...initialDevice, ...payload }];
    },
    updateDevice(state, { payload }) {
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) state = [...state, { ...initialDevice, ...payload }];
      const newState = [...state];
      newState[index] = { ...newState[index], ...payload };
      return newState;
    },
    removeDevice(state, { payload }) {
      return state.filter(({ id }) => id !== payload.id);
    },
    startRecord(state, { payload }) {
      // payload = {id, file: {name, confirmed}}
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index === -1) return state;
      const newRecord = { ...initialLogRecord, file: payload.file };
      state[index].log.push(newRecord);
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
  },
});

export const {
  createDevice,
  updateDevice,
  removeDevice,
  startRecord,
  stopRecord,
  updateRecord,
} = devicesSlice.actions;
export default devicesSlice.reducer;
