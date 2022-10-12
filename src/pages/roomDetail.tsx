import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/loader";
import {
  FetchPlaceApi,
  FetchReviewApi,
  FetchSingleRoomApi,
} from "../services/place.api";
import { MdOutlinePool, MdKitchen } from "react-icons/md";
import { FaHotTub, FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { IPlace, IRoom } from "../types/interface";
import { searchPlace } from "../store/reducers/placesReducer";
import type { RootState } from "../store/store";
import Booking from "../components/booking/booking";
import { Root } from "react-dom/client";
import { setComments } from "../store/reducers/userReducer";
import UseComment from "../hooks/useComment";

function RoomDetail() {
  const [comment, setComment] = useState<string | any>("");
  const [room, setRoom] = useState<IRoom | null>();
  const { comments } = useSelector((state: RootState) => state.user);
  const { roomId } = useParams();
  const [place, setPlace] = useState<IPlace | null>(null);
  const dispatch = useDispatch();
  const fetchCommnet = UseComment();
  const { selected } = useSelector((state: RootState) => state.places);

  useEffect(() => {
    fetchSingleRoom();
    fetchReview();
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
  }
  async function fetchReview() {
    const result = await FetchReviewApi(roomId);
    const { data } = result;
    dispatch(setComments(data));
    // setReview(data);
  }
  function handleComment() {
    fetchCommnet(roomId, comment);
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
      <div className="flex px-3 justify-between flex-col border-t-2 mt-3  sm:flex-row">
        <div className="w-full px-1 sm:px-5 mt-3 sm:w-2/5 flex-col">
          <h5 className="text-slate-500 font-xl">Đánh giá:</h5>
          <div className="flex flex-row gap-0">
            <input
              onChange={(e) => setComment(e.target.value)}
              className="input border-2 rounded ml-3 w-full sm:w-2/3"
              value={comment}
            />
            <button
              className="bg-red-500 hover:bg-red-800 mr-2 sm:mr-3 p-2 rounded text-white font-bold"
              onClick={handleComment}
            >
              review{" "}
            </button>
          </div>
          <ul>
<<<<<<< HEAD
            {review ? (
              review.map((ele: any, index: number) => {
                return (
                  <li className="mt-2 border-b-2 list-disc py-2" key={index}>
                    {ele.content}
                  </li>
                );
              })
            ) : (
              <h4>không có đánh giá</h4>
            )}
=======
            {comments
              ? comments.map((ele: any, index: number) => {
                  return (
                    <li className="mt-2 border-b-2 py-2" key={index}>
                      {ele.content}
                    </li>
                  );
                })
              : "không có đánh giá"}
>>>>>>> d569b5dcdd160692d3d65736b95a0a609d9c0053
          </ul>
        </div>
        <div className="w-2/3 px-5 mt-3 sm:w-2/5">
          <Booking
            price={room?.price.toString()}
            rating={room?.valueate || ""}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default RoomDetail;
