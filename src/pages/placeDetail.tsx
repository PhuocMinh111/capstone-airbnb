import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Map from "../components/map/map";
import { FetchSinglePlaceApi } from "../services/place.api";
import { IPlace } from "../types/interface";
function PlaceDetail() {
  const [state, setState] = useState<IPlace>();
  const detailId = useParams();
  const { placeId } = useParams();

  useEffect(() => {
    fetchPlace();
  }, []);

  const fetchPlace = async () => {
    const result = await FetchSinglePlaceApi(placeId);
    setState(result.data);
  };
  return (
    <div className="flex flex-col sm:flex-row p-3">
      <div className="w-full sm:w-1/2 sm:mx-3">
        {state && (
          <div className="flex flex-col">
            <img
              src={state.image}
              className="w-58 rounded-md shadow-md h-58 sm:h-68 object-cover"
              alt="image"
            />
            <div className="flex mt-3 text-slate-800">
              <h5>
                {" "}
                {state.province} {state.name}{" "}
              </h5>
            </div>
          </div>
        )}
      </div>
      <div className="w-full grid item-center sm:w-1/2 sm:mx-3">
        <Map place="da nang" />
      </div>
    </div>
  );
}

export default PlaceDetail;
