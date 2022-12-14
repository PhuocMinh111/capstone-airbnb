import { useSelect } from "@mui/base";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SinglePlace from "../components/singlePlace/singlePlace";
import type { RootState } from "../store/store";
import { FetchPlaceApi } from "../services/place.api";
import { IPlace } from "../types/interface";
import styled from "styled-components";
import { setPlace } from "../store/reducers/placesReducer";

function Places({ search }: { search: boolean | null }) {
  // const [place, setPlaces] = useState<Array<IPlace> | any>();
  const isSearchOpen = useSelector(
    (state: RootState) => state.navbar.isSearchOpen
  );
  const { selected, places } = useSelector((state: RootState) => state.places);
  const dispatch = useDispatch();
  useEffect(() => {
    if (places.length > 0) return;
    fetchPlace();
  }, []);
  // console.log(place);

  //   console.log(canClick);
  // console.log(isSearchOpen);

  const fetchPlace = async () => {
    const result = await FetchPlaceApi();

    // setPlaces(result.data.slice(0, 50));
    dispatch(setPlace(result.data));
  };

  return (
    <div className="grid relative grid-cols-1 md:grid-cols-4 ">
      {!search
        ? places?.map((item: IPlace, index: any) => {
            return <SinglePlace {...item} key={index} />;
          })
        : selected.map((item, index) => <SinglePlace {...item} key={index} />)}
      {isSearchOpen && <ClickArea className=" bg-slate-500  "></ClickArea>}
    </div>
  );
}
const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 25;
  opacity: 0.3;
`;
export default Places;
