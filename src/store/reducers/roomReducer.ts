import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRoom } from "../../types/interface";
import { randomImg } from "../../constants/common";
interface RoomReducer {
  rooms: IRoom[];
}

const INITIAL_STATE: RoomReducer = {
  rooms: [],
};

const navBarSlice = createSlice({
  name: "rooms",
  initialState: INITIAL_STATE,
  reducers: {
    setRooms: (state, action: PayloadAction<IRoom[]>): void => {
      const temp = [...randomImg];
      const random = () => {
        let selected = new Map();
        let random = Math.floor(Math.random() * temp.length);

        while (!selected.has(random)) {
          random = Math.floor(Math.random() * temp.length);
          selected.set(random, temp[random]);
        }
        return random;
      };
      const result = action.payload.map((ele, index) => {
        if (ele.image) return ele;
        let ranNum = random();
        return { ...ele, image: temp[ranNum] };
      });
      console.log(result);

      state.rooms = result;
    },
  },
});
export const { setRooms } = navBarSlice.actions;
export default navBarSlice.reducer;
