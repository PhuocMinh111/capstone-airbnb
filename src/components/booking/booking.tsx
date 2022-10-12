import DatePicker from "../../components/navbar/datePicker";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { formatPrice } from "../../Utils/util";
import { FaStar } from "react-icons/fa";

function Booking({ price, rating }: { price: string; rating: string | any }) {
  const [checkin, setCheckin] = useState<Dayjs | null>(null);
  const [checkout, setCheckout] = useState<Dayjs | null>(null);
  console.log(checkin);

  return (
    <div
      className="w-full p-3 h-auto border-2 rounded-xl
    flex-col align-center
    "
    >
      <div className="flex justify-between">
        <h5 className="text-slate-900 font-medium text-lg ">
          {formatPrice(price)} đ <span className="text-slate-500">đêm</span>
        </h5>
        {rating} <FaStar className="hover:text-red-600" />
      </div>
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
      <div className="mt-3">
        <label htmlFor="customers">Số Khách</label>
        <input
          type="number"
          min={0}
          max={10}
          className="input ml-3"
          name=""
          id="customers"
        />
      </div>
      <button className="rounded-lg py-2 mt-3 text-white bg-red-500 w-3/4 mx-aut h-15">
        Đặt Phòng
      </button>
    </div>
  );
}

export default Booking;
