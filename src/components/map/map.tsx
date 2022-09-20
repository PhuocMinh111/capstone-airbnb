import React, { useRef, useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { google_token } from "../../constants/common";
interface Place {
  place: string;
}
function Map({ place }: Place) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          zoom: 4,
          center: { lat: 1, lng: 1 },
        })
      );
    }
  }, [ref, map]);

  return <div className="w-58 h-58 mx-auto" ref={ref}></div>;
}

//------------wrapped map-------------

function WrappedMap({ place }: Place) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper render={render} apiKey={google_token}>
      <Map place={place} />
    </Wrapper>
  );
}
export default WrappedMap;

function GetLatlong(address: string) {
  var geocoder = new google.maps.Geocoder();
  let latitude, longtitude;
  geocoder.geocode(
    {
      address: address,
    },
    function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log(results);
        // latitude = results?[0].geometry.location.lat();
        // longitude = results?[0].geometry.location.lng();
      }
    }
  );
  return { lat: latitude, lng: longtitude };
}
