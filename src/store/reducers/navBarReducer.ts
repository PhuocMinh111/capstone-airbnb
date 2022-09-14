import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface navbarState {
  isSideBarOpen:boolean;
}
const INITAL_STATE: navbarState = {
  isSideBarOpen:false
};

const navBarSlice = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
   openSidebar:(state):void =>{
       console.log('open')
       state.isSideBarOpen = true;
   },
   closeSidebar:(state):void =>{
       state.isSideBarOpen = false;
   },
  },
});
export const { openSidebar,closeSidebar } = navBarSlice.actions;
export default navBarSlice.reducer;
