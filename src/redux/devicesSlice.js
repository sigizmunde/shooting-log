import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { createDevice, updateDevice, removeDevice } =
  devicesSlice.actions;
export default devicesSlice.reducer;
