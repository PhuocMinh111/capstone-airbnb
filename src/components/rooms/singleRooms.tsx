import React, { useTransition } from "react";
import { FaStar, FaBed, FaWifi, FaSwimmingPool } from "react-icons/fa";

import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { IRoom } from "../../types/interface";
import { useNavigate } from "react-router-dom";
import useTransitionNavigate from "../../hooks/useTransitionNavigate";

function SingleRoom({ ...place }: IRoom) {
  const navigate = useTransitionNavigate();

  const {
    _id,
    kitchen,
    bedRoom,
    wifi,
    price,
    name,
    image,
    valueate,
    description,
  } = place;
  return (
    <div
      onClick={() => {
        navigate(`/roomDetail/${_id}`);
      }}
      className="flex transition ease-out relative hover:z-index:100 hover:scale-110 p-3 gap-4 shadow-md mx-3 my-2 rounded-xl flex-col"
    >
      <img
        className="h-58 w-58  relative objects-cover rounded-lg"
        alt="place-img"
        src={image}
      ></img>
      <div className="flex justify-between">
        <h5 className="text-bold">{name}</h5>

        <div>
          <FaStar />
          <span>{valueate}</span>
        </div>
      </div>
      <h5 className="text-slate-500 text-sm">
        {description.substring(0, 30)}...
      </h5>
      <h5 className="text-slate-800 text-sm">
        <span>giá </span> {price}{" "}
      </h5>
      <button className="absolute text-lg text-red-600 top-5 right-5">
        <AiOutlineHeart />
      </button>
    </div>
  );
}

const Wrapper = styled.div``;
export default SingleRoom;
