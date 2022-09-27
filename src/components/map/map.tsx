import React, { useRef, useState, useEffect, useMemo } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { google_token } from "../../constants/common";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { getLatlong } from "../../Utils/util";
import Loader from "../loader/loader";
import { fetchMap } from "../../axios/axios";
interface IPos {
  lat: number;
  lng: number;
}
function Map({ place }: { place: string | undefined }) {
  const [pos, setPos] = useState<IPos | undefined>();
  const [err, setErr] = useState(false);
  //   console.log(getLatlong(place));
  //   const pos = useMemo(() => ({ lat: 10, lng: 10 }), []);
  useEffect(() => {
    // getLatlong(place)
    //   .then((res: any) => {
    //     const lat = res.results[0].geometry.location.lat();
    //     const lng = res.results[0].geometry.location.lng();
    //     setPos({ lat: lat, lng: lng });
    //   })
    //   .catch((e) => {
    //     setErr(true);
    //   });
    fetchMap(place)
      .then((res) => {
        // console.log(res);
        const { result } = res.data;
        const lat = result.results[0].geometry.location.lat();
        const lng = result.results[0].geometry.location.lng();
      })
      .catch((err) => {});
  }, []);

  if (!pos) return <Loader />;
  if (err) return <h4 className="text-red-500">Content not found</h4>;

  return (
    <GoogleMap
      zoom={14}
      center={pos}
      mapContainerClassName="w-full h-full sm:w-58 sm:h-58"
    >
      <MarkerF position={pos} />
    </GoogleMap>
  );
}

export default Map;
