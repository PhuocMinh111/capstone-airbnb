import React, { useRef, useState, useEffect, useMemo } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { google_token } from "../../constants/common";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { getLatlong } from "../../Utils/util";
interface IPos {
  lat: number;
  lng: number;
}
function Map({ place }: { place: string | undefined }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [pos, setPos] = useState<IPos | undefined>();
  //   console.log(getLatlong(place));
  //   const pos = useMemo(() => ({ lat: 10, lng: 10 }), []);
  useEffect(() => {
    getLatlong(place).then((res: any) => {
      console.log(res);
      const lat = res.results[0].geometry.location.lat();
      const lng = res.results[0].geometry.location.lng();
      setPos({ lat: lat, lng: lng });
    });
  }, []);

  if (!pos) return <>loading</>;
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
