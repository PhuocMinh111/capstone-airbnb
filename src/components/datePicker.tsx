import React, { useEffect } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { CHECK_IN, CHECK_OUT } from "../constants/common";
// import { handleSearch } from "../store/reducers/searchReducer";
interface IProps {
  isSubmit: boolean;
  type: string;
}

export default function BasicDatePicker({ isSubmit, type }: IProps) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Dayjs | null>(null);
  useEffect(() => {
    if (!isSubmit) return;
    // if (type === CHECK_IN) {

    // }
    // if (type === CHECK_OUT) {

    // }
    // dispatch(handleSearch({ type: type, value: value }));
  }, [isSubmit]);

  return (
    <LocalizationProvider className="mt-2" dateAdapter={AdapterDayjs}>
      <DatePicker
        // label="Basic example"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
