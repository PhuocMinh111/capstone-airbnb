import DatePicker from "../../components/navbar/datePicker";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { formatPrice } from "../../Utils/util";

function Booking({ price, rating }: { price: string; rating: string }) {
  const [checkin, setCheckin] = useState<Dayjs | null>(null);
  const [checkout, setCheckout] = useState<Dayjs | null>(null);

  return (
    <div
      className="w-full p-3 h-full border-2 rounded-xl
    flex-col 
    "
    >
      <h5 className="text-slate-900 font-medium text-lg ">
        {formatPrice(price)} đ
      </h5>
      <div className="flex mt-2">
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
      <div>
        <label htmlFor="customers">Khach</label>
        <input type="number" className="input" name="" id="customers" />
      </div>
    </div>
  );
}

export default Booking;
