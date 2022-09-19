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
interface searchAction {
  search: string;
  data: IPlace[];
}

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
    searchPlace: (state, action: PayloadAction<searchAction>) => {
      console.log(action.payload);
      let idx: number;
      const data = action.payload.data;
      let result: Array<IPlace> = [];
      for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const province = element.province;
        console.log(province);
        if (province === undefined) continue;
        if (province.indexOf(action.payload.search) !== -1)
          result.push(element);
      }
      console.log(result);

      state.selected = result;
    },
  },
});
export const { setPlace, loadPlace, searchPlace } = placeReducer.actions;
export default placeReducer.reducer;
