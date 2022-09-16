import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./reducers/navBarReducer";
import placesReducer from "./reducers/placesReducer";
export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
    places: placesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
