import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../types/interface";
interface IPlaceReducer {
  places: IPlace[];
  index: number;
  selected: IPlace[];
}

const INITAL_STATE: IPlaceReducer = {
  places: [],
  index: 0,
  selected: [],
};

const placeReducer = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
    //    slicePlaceArr:():void => {
    //    }
    setPlace: (state, action: PayloadAction<IPlace[]>) => {
      state.places = action.payload;
    },
    loadPlace: (state) => {
      state.index += 20;
    },
    searchPlace: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.selected = state.places.filter((item) => {
        const { province } = item;
        return province.includes(action.payload);
      });
    },
  },
});
export const { setPlace, loadPlace, searchPlace } = placeReducer.actions;
export default placeReducer.reducer;
