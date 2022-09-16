import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../types/interface";
interface IPlaceReducer {
  places: IPlace[];
  index: number;
}

const INITAL_STATE: IPlaceReducer = {
  places: [],
  index: 0,
};

const placeReducer = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
    //    slicePlaceArr:():void => {
    //    }
    setPlace: (state, action) => {
      state.places = action.payload;
    },
    loadPlace: (state) => {
      state.index += 20;
    },
  },
});
export const { setPlace, loadPlace } = placeReducer.actions;
export default placeReducer.reducer;
