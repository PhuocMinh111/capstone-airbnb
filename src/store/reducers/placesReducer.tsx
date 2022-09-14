import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../types/interface";

const INITAL_STATE: IPlace[] = [];

const placeReducer = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
    //    slicePlaceArr:():void => {
    //    }
  },
});
export const {} = placeReducer.actions;
export default placeReducer.reducer;
