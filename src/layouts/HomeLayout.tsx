import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import SideBar from "../components/sidebar/sideBar";
import { FetchPlaceApi } from "../services/place.api";
import { setPlace } from "../store/reducers/placesReducer";

const HomeLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SideBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
