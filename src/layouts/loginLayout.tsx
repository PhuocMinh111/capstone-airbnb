import React from "react";
import LoginForm from "../components/loginForm/loginFrom";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import SignUp from "../components/loginForm/signUp";

function LoginLayout() {
  const { isSignUp } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a
        onClick={() => navigate(-1)}
        className="top-0 left-0 absolute rounded-lg p-3 bg-slate-400 w-20"
      >
        <FaArrowLeft className="text-slate-800" />
      </a>
      <div className=" grid w-full h-full place-items-center">
        {isSignUp ? <SignUp /> : <LoginForm />}
      </div>
    </div>
  );
}

export default LoginLayout;
