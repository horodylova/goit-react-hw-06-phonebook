import { createSlice } from '@reduxjs/toolkit';

export const clicksSlice = createSlice({
  name: 'clicks',  
  initialState: 0,  
  reducers: {
    update: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { update } = clicksSlice.actions;


export const persistClicksSlice = createSlice({
  name: 'persistClicks',
  initialState: { count: 0 }, 
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = persistClicksSlice.actions;
export const persistClicksReducer = persistClicksSlice.reducer;
