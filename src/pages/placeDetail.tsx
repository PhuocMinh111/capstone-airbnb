import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchSinglePlaceApi } from "../services/place.api";
import { IPlace } from "../types/interface";
import { useLoadScript } from "@react-google-maps/api";
import { google_token } from "../constants/common";
import Map from "../components/map/map";

function PlaceDetail() {
  const [state, setState] = useState<IPlace | null>(null);
  const detailId = useParams();
  const { placeId } = useParams();
  //-----google map----------

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: google_token,
  });

  //----------------------------------

  useEffect(() => {
    fetchPlace();
  }, []);

  const fetchPlace = async () => {
    const result = await FetchSinglePlaceApi(placeId);
    setState(result.data);
  };
  if (!isLoaded) return <>Loading</>;
  return (
    state && (
      <div className="flex flex-col sm:flex-row p-3">
        <div className="w-full sm:w-1/2 sm:mx-3">
          <div className="flex flex-col">
            <img
              src={state?.image}
              className="w-58 rounded-md shadow-md h-58 sm:h-68 sm:w-68 object-cover"
              alt="image"
            />
            <div className="flex mt-3 text-slate-800">
              <h5>
                {" "}
                {state?.province} {state?.name}{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full grid item-center sm:w-1/2 sm:mx-3">
          <Suspense>
            <Map place={state?.name} />
          </Suspense>
        </div>
      </div>
    )
  );
}

export default PlaceDetail;
