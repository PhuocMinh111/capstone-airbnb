import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPlace } from "../../types/interface";
import { removeAccents } from "../../Utils/util";
import Places from "../../pages/places";
import { Dayjs } from "dayjs";

interface IBooking {
  checkin: string | undefined;
  checkout: string | undefined;
  cusNumber: Number | undefined;
}
const INITIAL_STATE: Array<IBooking> = [];
const bookingReducer = createSlice({
  name: "booking",
  initialState: INITIAL_STATE,
  reducers: {
    //    slicePlaceArr:():void => {
    //    }
    setBooking: (state, action: PayloadAction<IBooking>) => {
      const temp = [...state];
      temp.push(action.payload);
      state = [...temp];
    },
  },
});
export const { setBooking } = bookingReducer.actions;
export default bookingReducer.reducer;
