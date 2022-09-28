import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../types/interface";
import { removeAccents } from "../../Utils/util";
import Places from "../../pages/places";

interface IPlaceReducer {
  places: IPlace[];
  index: number;
  selected: IPlace[];
}

const INITIAL_STATE: IPlaceReducer = {
  places: [],
  index: 0,
  selected: [],
};
interface searchAction {
  search: string;
  data: IPlace[];
}

const placeReducer = createSlice({
  name: "searchForm",
  initialState: INITIAL_STATE,
  reducers: {
    //    slicePlaceArr:():void => {
    //    }
    setPlace: (state, action: PayloadAction<IPlace[]>) => {
      state.places = action.payload;
    },
    loadPlace: (state) => {
      state.index += 20;
    },
    searchPlace: (state, action: PayloadAction<searchAction>) => {
      console.log(action.payload);
      let idx: number;
      const data = action.payload.data;
      let searchArr: string[] = removeAccents(
        action.payload.search.toLowerCase()
      ).split(" ");

      let result: Array<IPlace> = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let province = element.province;
        if (province === undefined) {
          continue;
        } else {
          province = removeAccents(province.toLowerCase());
          for (let letter of searchArr) {
            if (province.includes(letter)) {
              result.push(element);
              break;
            }
          }
        }
      }

      state.selected = result;
    },

    clearSearch: (state) => {
      state.selected = [];
    },
  },
});
export const { setPlace, loadPlace, searchPlace } = placeReducer.actions;
export default placeReducer.reducer;
