import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignUp, setUser } from "../../store/reducers/userReducer";

function LoginForm() {
  const dispatch = useDispatch();
  const [pass, setPass] = useState<string | number | any>("");
  const [username, setUsername] = useState<string | number | any>("");
  function handleSignIn() {}

  function fetchSignIn() {}
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="******************"
            />
            {pass.length < 1 && (
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <a
              onClick={() => {
                dispatch(setSignUp());
              }}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs"></p>
      </div>
      ;
    </div>
  );
}

export default LoginForm;
