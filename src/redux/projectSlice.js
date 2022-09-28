import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  name: '',
  info: '',
  owner: '',
  date: new Date().toISOString(),
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    create(_, { payload }) {
      return { ...initialState, ...payload };
    },
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { create, update } = projectSlice.actions;
export default projectSlice.reducer;
