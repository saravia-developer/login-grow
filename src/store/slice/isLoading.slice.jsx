import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    setIsLoading: (state, action) => { state.value = action.payload } 
  }
});

export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;