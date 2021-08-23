import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from 'redux/slices/mobileNavSlice';

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});
