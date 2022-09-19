import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Rooms from "../components/rooms/Rooms";
import { FetchPlaceApi } from "../services/place.api";
import { setPlace } from "../store/reducers/placesReducer";
import { IPlace } from "../types/interface";

const Home = () => {
  return (
    <>
      <Rooms />
    </>
  );
};

export default Home;
