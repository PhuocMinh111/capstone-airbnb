import React, { useState, useEffect, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleRoom from "./singleRooms";
import type { RootState } from "../../store/store";
import { FetchPlaceApi, FetchRoomApi } from "../../services/place.api";
import { IRoom } from "../../types/interface";
import styled from "styled-components";
import { shuffleArray } from "../../Utils/util";
import { setPlace } from "../../store/reducers/placesReducer";
import Loader from "../loader/loader";
import useTransitionNavigate from "../../hooks/useTransitionNavigate";
import { setRooms } from "../../store/reducers/roomReducer";
function Room() {
  // const [rooms, setRooms] = useState<Array<IRoom> | any>();
  const navigateTransition = useTransitionNavigate();
  const isSearchOpen = useSelector(
    (state: RootState) => state.navbar.isSearchOpen
  );
  const { rooms } = useSelector((state: RootState) => state.rooms);
  useEffect(() => {
    fetchRoom();
  }, []);

  //   console.log(canClick);
  // console.log(rooms);
  const dispatch = useDispatch();
  const fetchRoom = async () => {
    const result = await FetchRoomApi();
    dispatch(setRooms(shuffleArray(result.data.slice(0, 100))));
  };

  if (!rooms) return <Loader />;
  return (
    <div className="grid relative grid-cols-1 md:grid-cols-4 ">
      {rooms?.map((item: IRoom, index: any) => {
        return <SingleRoom {...item} key={index} />;
      })}
      {isSearchOpen && <ClickArea className=" bg-slate-500  "></ClickArea>}
    </div>
  );
}
const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 25;
  opacity: 0.3;
`;
export default Room;
