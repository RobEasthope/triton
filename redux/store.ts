import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mobileNavReducer from 'redux/slices/mobileNavSlice';

const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export default store;
