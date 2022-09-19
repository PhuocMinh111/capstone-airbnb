/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../store/reducers/navBarReducer";
import Search from "./search";
import Profile from "./profile";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Disclosure as="nav" className="bg-gray-800 z-50 sticky top-0 h-auto">
      {({ open }) => (
        <>
          <div className="mx-auto h-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
            <div className="relative flex h-auto items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  onClick={() => dispatch(openSidebar())}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
                <span>
                  <FaAirbnb className="text-lg text-red-50 sm:hidden" />
                </span>
              </div>
              <div className="flex  flex-1 md:text-2xl sm:text-sm items-center justify-center sm:items-stretch sm:justify-start">
                <div className="block flex-1 md:flex-row md:flex flex-shrink-0 text-slate-50 items-center">
                  <div>
                    <FaAirbnb className="text-slate-50 h-8 w-8 hidden h-8 w-auto lg:hidden" />
                    <FaAirbnb
                      className="text-slate-50 hidden h-10 w-10 lg:block"
                      width={20}
                    />
                  </div>
                  <div className="hidden sm:block">AirBnb</div>
                </div>
                <Search />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Profile />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
