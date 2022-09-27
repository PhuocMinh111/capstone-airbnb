import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/loader";
import { FetchPlaceApi, FetchSingleRoomApi } from "../services/place.api";
import { MdOutlinePool, MdKitchen } from "react-icons/md";
import { FaHotTub, FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { IPlace } from "../types/interface";
import { searchPlace } from "../store/reducers/placesReducer";
import type { RootState } from "../store/store";
function RoomDetail() {
  const [room, setRoom] = useState<any | null>();
  const { roomId } = useParams();
  const [place, setPlace] = useState<IPlace | null>(null);
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.places);

  useEffect(() => {
    fetchSingleRoom();
  }, []);

  useEffect(() => {
    if (!room) return;
    fecthPlacesDetail(room.locationId?.province);
  }, [room]);

  async function fecthPlacesDetail(search: string | undefined) {
    const result = await FetchPlaceApi();
    if (!search) return;
    dispatch(searchPlace({ data: result.data, search: search }));
  }
  async function fetchSingleRoom() {
    const result = await FetchSingleRoomApi(roomId);
    const { data } = result;
    setRoom(data);
    console.log(data);
  }
  return room ? (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-23 sm:w-1/2 mx-auto p-3">
          <img
            src={room.image}
            alt="image"
            className="rounded-lg h-58 sm:h-full sm:w-full object-cover"
          />
        </div>
        <div className="w-2/3 sm:w-1/2 mx-auto p-3">
          <h5 className="text-2xl font-bold text-slate-800">Mô tả</h5>
          <h4 className="text-sm font-light text-slate-500">
            {room.guests && ` ${room.guests} khách |`}
            {room.bedRoom && ` ${room.bedRoom} phòng ngủ |`}
            {room.bath && ` ${room.bath} phòng tắm |`}
          </h4>
          <h4 className="flex mt-3 text-slate-500 text-sm text-md ">
            {room.pool && (
              <span className="mr-3 hover:text-green-400">
                <MdOutlinePool className="scale-150" /> <br />
                Hồ bơi
              </span>
            )}
            {room.wifi && (
              <span className="mr-3 hover:text-green-400">
                <FaWifi className="scale-150" /> <br />
                Wifi
              </span>
            )}
            {room.gym && (
              <span className="mr-3 hover:text-green-400">
                <CgGym className="scale-150" /> <br />
                Gymm
              </span>
            )}
            {room.hotTub && (
              <span className="mr-3 hover:text-green-400">
                <FaHotTub className="scale-150" /> <br />
                Hồ nước nóng
              </span>
            )}
            {room.kitchen && (
              <span className="mr-3 hover:text-green-400">
                <MdKitchen className="scale-150" /> <br />
                Bếp
              </span>
            )}
          </h4>
          <hr className="w-2/3 border-t-1 border-slate-500" />
          <p>{room.description}</p>
          <div className="flex flex-auto"></div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default RoomDetail;
