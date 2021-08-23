import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from 'redux/slices/mobileNav.slice';

const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
