import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CHECK_IN, CHECK_OUT } from "../../constants/common";
import { IUser } from "../../types/interface";
interface state {
  user: Array<IUser>;
  isLogin: boolean;
  isSignUp: boolean;
}
const INITIAL_STATE: state = {
  user: [],
  isLogin: false,
  isSignUp: false,
};

const userReducer = createSlice({
  name: "searchForm",
  initialState: INITIAL_STATE,
  reducers: {
    // handleDateSearch: (state, action: PayloadAction<DateAction>) => {
    //   state[action.payload.type] = action.payload.value;
    // },
    setUser: (state, action: PayloadAction<IUser>) => {
      const temp = [];
      temp.push(action.payload);
      state.user = [...temp];
    },
    setSignUp: (state) => {
      state.isSignUp = true;
    },
  },
});
export const { setUser, setSignUp } = userReducer.actions;
export default userReducer.reducer;
