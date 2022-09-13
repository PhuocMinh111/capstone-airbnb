import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CHECK_IN, CHECK_OUT } from "../../constants/common";

interface SearchFormState {
  place: string;
  checkIn: string;
  checkOut: string;
}
const INITAL_STATE: SearchFormState = {
  place: "",
  checkIn: "",
  checkOut: "",
};
interface DateAction {
  type: string;
  value: string;
}
const searchSlice = createSlice({
  name: "searchForm",
  initialState: INITAL_STATE,
  reducers: {
    // handleDateSearch: (state, action: PayloadAction<DateAction>) => {
    //   state[action.payload.type] = action.payload.value;
    // },
    handlePlace: (state, action: PayloadAction<string>) => {
      state.place = action.payload;
    },
  },
});
export const { handlePlace } = searchSlice.actions;
