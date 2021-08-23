import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from 'components/navigation/MobileNav/mobileNav.slice';

const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
