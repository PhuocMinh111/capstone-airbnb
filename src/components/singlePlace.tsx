import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { IPlace } from "../types/interface";

function SinglePlace({ ...place }: IPlace) {
  const { _id, name, image, country, valueate, province } = place;
  return (
    <Wrapper className="flex relative p-3 gap-4 shadow-md mx-3 my-2 rounded-xl flex-col">
      <img
        className="h-58 w-58 relative objects-cover rounded-lg"
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
      <h5 className="text-slate-400 text-sm">
        {province}, {country}
      </h5>
      <button className="absolute text-lg text-red-600 top-5 right-5">
        <AiOutlineHeart />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default SinglePlace;
