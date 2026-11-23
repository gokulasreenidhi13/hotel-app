import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './hotelsSlice';

export const store = configureStore({
  reducer: {
    // this key is why we can read state.hotels later
    hotels: hotelsReducer,
  },
});