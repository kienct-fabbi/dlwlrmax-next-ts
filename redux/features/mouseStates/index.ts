import { createSlice } from '@reduxjs/toolkit';

export const changeMouseSlice = createSlice({
  name: 'mouseState',
  initialState: {
    style: 'normal',
    state: 'normal',
    size: {
      width: 35,
      height: 35
    },
    position: {
      x: 0,
      y: 0
    }
  },
  reducers: {
    change: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { change } = changeMouseSlice.actions;
export default changeMouseSlice.reducer;
