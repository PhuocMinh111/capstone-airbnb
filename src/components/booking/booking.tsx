import DatePicker from "../../components/navbar/datePicker";
import { Dayjs } from "dayjs";
import React, { useState } from "react";

function Booking() {
  const [checkin, setCheckin] = useState<Dayjs | null>(null);
  const [checkout, setCheckout] = useState<Dayjs | null>(null);

  return (
    <div
      className="w-40 h-40 rounded-xl
    flex-col 
    "
    >
      <div className="flex">
        <DatePicker
          name="ngay di"
          setValue={setCheckin}
          value={checkin}
        ></DatePicker>
        <DatePicker
          name="ngay ve"
          setValue={setCheckout}
          value={checkout}
        ></DatePicker>
      </div>
    </div>
  );
}

export default Booking;
