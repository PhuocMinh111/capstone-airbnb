import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import BasicDatePicker from "./dataPicker";

const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];
type navigation = {
  name: string;
  href: string;
  current: boolean;
}[];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  const navigate = useNavigate();
  const [show, setshow] = useState<boolean>(false);
  const containRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function outsideClose(e: any) {
      const dialog = document.querySelector('[role="dialog"]');

      if (
        containRef.current &&
        !containRef.current.contains(e.target) &&
        !dialog?.contains(e.target)
      ) {
        console.log(e.target);

        setshow(false);
      }
    }
    document.addEventListener("click", outsideClose);

    return () => {
      document.removeEventListener("click", outsideClose);
    };
  }, [containRef]);

  return (
    <Wrapper className="mx-auto lg:w-2/3 lg:h-auto sm:w-25">
      <div
        className={`${
          show ? "h-16" : "h-0"
        } transition-all sm:mx-auto overflow-hidden sm:block `}
      >
        <div className="flex mx-auto space-x-4">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md no-underline text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
              onClick={() => navigate(`/${item.name}`)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {show ? (
        <div ref={containRef}>
          <form
            className={`${
              show ? "block" : "hidden"
            } flex h-auto px-4 border-2 bg-light lg:w-auto sm:w-2/3 rounded-full shadow-sm`}
          >
            <div className="flex flex-col lg:w-1/4 mx-2 ">
              <label id="place" htmlFor="place" className="text-lg">
                dia diem
              </label>
              <input id="place" type="text" placeholder="" />
            </div>
            <BasicDatePicker />
          </form>
        </div>
      ) : (
        <div
          className="flex h-5 py-4 border-2 justify-center bg-light items-center  sm:w-2/3 rounded-full shadow-sm"
          onClick={() => setshow(true)}
        >
          <div className="w-1/4 cursor-pointer text-lg">Chỗ ở bất kỳ</div>
          <div className="w-1/4 cursor-pointer text-lg">Ngày đi</div>
          <div className="w-1/4 cursor-pointer text-lg">Ngày về</div>
          <FaSearch className="rounded-full text-white w-8 h-8 bg-red-500 p-2" />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Search;
