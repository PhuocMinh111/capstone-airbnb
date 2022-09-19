import { useSelect } from "@mui/base";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SingleRoom from "./singleRooms";
import type { RootState } from "../../store/store";
import { FetchRoomApi } from "../../services/place.api";
import { IRoom } from "../../types/interface";
import styled from "styled-components";
import { shuffleArray } from "../../Utils/util";
function Room() {
  const [rooms, setRooms] = useState<Array<IRoom> | any>();
  const isSearchOpen = useSelector(
    (state: RootState) => state.navbar.isSearchOpen
  );
  useEffect(() => {
    fetchPlaceApi();
  }, []);

  //   console.log(canClick);

  const fetchPlaceApi = async () => {
    const result = await FetchRoomApi();
    setRooms(shuffleArray(result.data.slice(0, 30)));
  };

  if (!rooms) return null;
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
