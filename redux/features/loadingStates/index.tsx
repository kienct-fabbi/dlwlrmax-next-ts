import { createSlice } from '@reduxjs/toolkit';

export const changeLoadingSlice = createSlice({
  name: 'loadingState',
  initialState: {
    isLoading: true
  },
  reducers: {
    change: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { change } = changeLoadingSlice.actions;
export default changeLoadingSlice.reducer;
