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
    createProject(_, { payload }) {
      return { ...initialState, ...payload };
    },
    updateProject(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { createProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
