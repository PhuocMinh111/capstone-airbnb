import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./reducers/navBarReducer";
import placesReducer from "./reducers/placesReducer";
import userReducer from "./reducers/userReducer";
export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
    places: placesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
