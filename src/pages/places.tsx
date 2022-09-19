import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SinglePlace from "../components/singlePlace";
import UseIntersectionObserver from "../hooks/useIntersectionObserver";
import { FetchPlaceApi } from "../services/place.api";
import { IPlace } from "../types/interface";
import { setPlace } from "../store/reducers/placesReducer";
import Loader from "../components/loader/loader";

function Places() {
  const [places, setPlaces] = useState<Array<IPlace> | any>();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPlaceApi();
  }, []);

  const fetchPlaceApi = async () => {
    const result = await FetchPlaceApi();
    setPlaces(result.data.slice(0, 20));
    dispatch(setPlace(result.data));
  };

  if (!places) return <Loader />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      {places?.map((item: IPlace, index: any) => {
        return <SinglePlace {...item} key={index} />;
      })}
    </div>
  );
}

export default Places;
