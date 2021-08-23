import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileNavOpen: false,
};

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    openMobileNav: (state) => {
      state.mobileNavOpen = true;
    },
    closeMobileNav: (state) => {
      state.mobileNavOpen = false;
    },
    toggleMobileNav: (state) => {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
  },
});

export const { openMobileNav, closeMobileNav, toggleMobileNav } =
  mobileNavSlice.actions;

export const selectMobileNavStatus = (state) => state.mobileNav.mobileNavOpen;

export default mobileNavSlice.reducer;
