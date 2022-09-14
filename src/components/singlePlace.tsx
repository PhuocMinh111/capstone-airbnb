import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { IPlace } from "../types/interface";

function SinglePlace({ ...place }: IPlace) {
  const { _id, name, image, country, valueate, province } = place;
  return (
    <Wrapper className="flex flex-col">
      <img className="objects-cover rounded-lg" src={image}></img>
      <div className="flex justify-between">
        <h5 className="text-bold">{name}</h5>
        <FaStar />
        <span>{valueate}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default SinglePlace;
