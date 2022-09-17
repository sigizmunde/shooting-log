const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  id: 0,
  name: '',
  info: '',
  owner: '',
  date: new Date().toISOString(),
};

const counterSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    create(state, { payload }) {
      state = payload;
    },
    update(state, { payload }) {
      state = { ...state, ...payload };
    },
  },
});

export const { create, update } = counterSlice.actions;
export default counterSlice.reducer;
