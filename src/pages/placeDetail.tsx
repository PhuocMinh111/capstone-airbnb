import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Map from "../components/map/map";
function PlaceDetail() {
  const detailId = useParams();

  return (
    <div className="flex flex-col sm:flex-row p-3">
      <div className="w-full sm:w-1/2 sm:mx-3">
        <Map place={"da nang"} />
      </div>
      <div className="w-full sm:w-1/2 sm:mx-3">place</div>
    </div>
  );
}

export default PlaceDetail;
