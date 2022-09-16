import React, { useState, useEffect } from "react";
import SinglePlace from "../components/singlePlace";
import UseIntersectionObserver from "../hooks/useIntersectionObserver";
import { FetchPlaceApi } from "../services/place.api";
import { IPlace } from "../types/interface";

function Places() {
  const [places, setPlaces] = useState<Array<IPlace> | any>();

  useEffect(() => {
    fetchPlaceApi();
  }, []);

  const fetchPlaceApi = async () => {
    const result = await FetchPlaceApi();
    setPlaces(result.data.slice(0, 20));
  };
  if (!places) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      {places?.map((item: IPlace, index: any) => {
        return <SinglePlace {...item} key={index} />;
      })}
    </div>
  );
}

export default Places;
