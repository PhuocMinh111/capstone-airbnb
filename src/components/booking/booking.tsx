import DatePicker from "../../components/navbar/datePicker";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { formatPrice } from "../../Utils/util";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setBooking } from "../../store/reducers/booking";
function Booking({ price, rating }: { price: string; rating: string | any }) {
  const dispatch = useDispatch();

  const [checkin, setCheckin] = useState<Dayjs | null>(null);
  const [checkout, setCheckout] = useState<Dayjs | null>(null);
  const [cusNumber, setcusNumber] = useState<number | any>(0);
  console.log(checkin);

  function handleBooking() {
    if (!checkin && checkout) return;
    dispatch(
      setBooking({
        checkin: checkin?.toString(),
        checkout: checkout?.toString(),
        cusNumber: cusNumber,
      })
    );
  }
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
          className="input ml-3 border-1 rounded"
          name=""
          value={cusNumber}
          onChange={(e) => setcusNumber(e.target.value)}
          id="customers"
        />
      </div>
      <button
        onClick={handleBooking}
        className="rounded-lg py-2 mt-3 text-white bg-red-500 w-3/4 mx-aut h-15"
      >
        Đặt Phòng
      </button>
    </div>
  );
}

export default Booking;
