import React, { useEffect } from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {Dayjs} from 'dayjs'
import { useDispatch } from "react-redux";
import { CHECK_IN, CHECK_OUT } from "../constants/common";
// import { handleSearch } from "../store/reducers/searchReducer";
interface IProps {
  isSubmit: boolean;
  value:Dayjs | null;
  setValue:(newValue:any) => void;
}

export default function BasicDatePicker({ isSubmit,value,setValue }: IProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSubmit) return;
    // if (type === CHECK_IN) {

    // }
    // if (type === CHECK_OUT) {

    // }
    // dispatch(handleSearch({ type: type, value: value }));
  }, [isSubmit]);

  return (
    <LocalizationProvider className="mt-2 w-20 sm:w-40" dateAdapter={AdapterDayjs}>
      <DatePicker
        // label="Basic example"
        value={value}
        onChange={setValue}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
