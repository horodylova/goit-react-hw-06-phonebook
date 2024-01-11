import { createSlice } from '@reduxjs/toolkit';

export const clicksSlice = createSlice({
  name: 'clicks',  
  initialState: 0,  
  reducers: {
    update: (state, action) => {
      return state + 1;
    },
  },
});

export const { update } = clicksSlice.actions;
export default clicksSlice.reducer;