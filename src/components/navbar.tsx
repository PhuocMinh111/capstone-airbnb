import React from "react";
import { FaAirbnb } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="bg-black w-full flex justify-between p-3 text-slate-200">
      <div className="logo">
        <FaAirbnb className="text-4xl" />{" "}
        <span className="d-inline ">AirBnB</span>
      </div>
      <div className="div">
        <ul className="flex text-center items-center flex-auto">
          <li className="text-slate-200 ">Noi o</li>
          <li className="text-slate-200 ">Trai nghiem</li>
          <li className="text-slate-200 ">Trai nghiem truc tuyen</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
