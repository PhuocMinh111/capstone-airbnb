import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface navbarState {
  isSideBarOpen: boolean;
  isSearchOpen: boolean;
}
const INITAL_STATE: navbarState = {
  isSideBarOpen: false,
  isSearchOpen: false,
};

const navBarSlice = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
    openSidebar: (state): void => {
      console.log("open");
      state.isSideBarOpen = true;
    },
    closeSidebar: (state): void => {
      state.isSideBarOpen = false;
    },
    openSearch: (state): void => {
      console.log(state.isSearchOpen);
      state.isSearchOpen = true;
    },
    closeSearch: (state): void => {
      state.isSearchOpen = false;
    },
  },
});
export const { openSearch, closeSearch, openSidebar, closeSidebar } =
  navBarSlice.actions;
export default navBarSlice.reducer;
