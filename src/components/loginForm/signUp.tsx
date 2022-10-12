import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchSignUp } from "../../services/user.api";
import { setLogin } from "../../store/reducers/userReducer";
import BasicDatePicker from "../navbar/datePicker";

const action = [
  { name: "tên" },
  { email: "Email" },
  { password: "mật khẩu" },
  { birthday: "sinh nhật" },
  { gender: "giới tính" },
  { address: "địa chỉ" },
];
interface Iform {
  name: string;
  email: string;
  password: string;
  birthDay: Dayjs;
  gender: boolean;
  address: string;
}
function SignUp() {
  const dispatch = useDispatch();
  const [form, setForm] = useState<Iform | any>({
    name: "string",
    email: "string",
    password: "string",
    birthDay: "string",
    gender: false,
    address: "string",
  });
  function handleSignUp() {
    const fetchSignUp = async () => {
      const result = await FetchSignUp(form);
      console.log(result);
    };
    fetchSignUp();
  }
  function renderInputs() {
    return action.map((ele, index) => {
      const value = Object.values(ele)[0];
      if (value === "mật khẩu")
        return (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              {value}
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
        );
      if (value === "sinh nhật")
        return (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              {value}
            </label>
            <BasicDatePicker
              value={form.birthday}
              name="birthday"
              setValue={(newValue) => {
                console.log(newValue);

                setForm({
                  ...form,
                  ["birthDay"]: `${newValue.$y}/${newValue.$M}/${newValue.$D}`,
                });
              }}
            />
          </div>
        );
      if (value === "giới tính")
        return (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              {value}
            </label>
            <select
              onChange={(e) => {
                if (e.target.value === "nam")
                  setForm({ ...form, ["gender"]: true });
                if (e.target.value === "nu")
                  setForm({ ...form, ["gender"]: false });
              }}
              name="gender"
            >
              <option value="nam">nam</option>
              <option value="nu">nữ</option>
            </select>
          </div>
        );
      return (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {value}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name={Object.keys(ele)[0]}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            placeholder="Username"
          />
        </div>
      );
    });
  }
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {renderInputs()}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <a
              onClick={() => {
                dispatch(setLogin());
              }}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              login
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2020 Acme Corp. All rights reserved.
        </p>
      </div>
      ;
    </div>
  );
}

export default SignUp;
