import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CHECK_IN, CHECK_OUT } from "../../constants/common";
import { IUser } from "../../types/interface";
interface state {
  user: Array<IUser>;
  isLogin: boolean;
  isSignUp: boolean;
  comments: any[];
}
const INITIAL_STATE: state = {
  user: [],
  isLogin: false,
  isSignUp: false,
  comments: [],
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
    setLogin: (state) => {
      state.isSignUp = false;
    },
    setComments: (state, action: PayloadAction<any>) => {
      state.comments = action.payload;
    },
  },
});
export const { setUser, setSignUp, setLogin, setComments } =
  userReducer.actions;
export default userReducer.reducer;
