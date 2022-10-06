import React from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/reducers/userReducer";
const action: string[] = [
  "name",
  "email",
  "password",
  "phone",
  "birthday",
  "gender",
  "address",
];
function SignUp() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
          {action.map((ele, index) => {
            return (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  {ele}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={ele}
                  id={ele}
                  type="text"
                  placeholder={ele}
                />
              </div>
            );
          })}

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                dispatch(setLogin());
              }}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Sign Up
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
