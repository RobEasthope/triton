import { createSlice } from '@reduxjs/toolkit';

export type MobileNavSliceProps = {
  mobileNav: { mobileNavOpen: boolean };
};

export type MobileNavSliceStateProps = { mobileNavOpen: boolean };

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState: {
    mobileNavOpen: false,
  } as MobileNavSliceStateProps,
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

export const selectMobileNavStatus = (state: {
  mobileNav: { mobileNavOpen: boolean };
}): boolean => state.mobileNav.mobileNavOpen;

export default mobileNavSlice.reducer;
