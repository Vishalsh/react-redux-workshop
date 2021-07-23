import { createSlice } from '@reduxjs/toolkit';

export const customisableComponentsSlice = createSlice({
  name: 'counter',
  initialState: {
    data: {},
    loading: false,
    error: null
  },
  reducers: {
    inProgress: (state) => ({
      ...state,
      loading: true,
    }),
    successful: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload  
    }),
    failed: (state, action) => ({
      ...state,
      loading: false,
      error: action.error.mesage
    })
  },
})

export const { inProgress, successful, failed } = customisableComponentsSlice.actions;

export default customisableComponentsSlice.reducer;