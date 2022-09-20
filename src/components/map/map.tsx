import React, { useRef, useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { google_token } from "../../constants/common";

function Map({ place }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, { zoom: 4, center: place })
      );
    }
  }, [ref, map]);

  return <div style={{ width: "500px", height: "500px" }} ref={ref}></div>;
}
function WrappedMap({ place }) {
  return (
    <Wrapper apiKey={google_token}>
      <Map place={place} />
    </Wrapper>
  );
}
export default WrappedMap;

function GetLatlong(adress) {
  var geocoder = new google.maps.Geocoder();
  let latitude, longtitude;
  geocoder.geocode(
    {
      address: address,
    },
    function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
      }
    }
  );
   return { lat: latitude, lng: longtitude };
}
