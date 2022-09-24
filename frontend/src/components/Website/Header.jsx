import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiBookAlt, BiHome, BiLogIn, BiMoney, BiSupport } from "react-icons/bi";
import ThemeToggle from "../ThemeToggle";
export default function AppHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:mb-16 md:mb-16 lg:mb-16">
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-slate-900 fixed  w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center select-none">
            <img
              src="/icon.png"
              className="mr-3 h-10 sm:h-12 dark:contrast-50"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Uploader.io
            </span>
          </a>
          <div className="flex md:order-2 select-none">
            <ThemeToggle />
            <button
              type="button"
              className="flex text-white bg-blue-700 hover:border-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <BiLogIn className="h-5 w-5 mr-2" />
              Login
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className={`${open ? "hidden" : "h-6 w-6"}`} />
              <FaTimes
                className={`${
                  open ? "hover:animate-bounce h-6 w-6" : "hidden"
                }`}
              />
            </button>
          </div>
          <div
            className={`${
              open
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col items-center p-2 mt-2 sm:space-y-2 md:space-y-0  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <a
                href="#"
                className="flex py-2 pr-4 pl-3 text-gray-700 rounded  md:border-0 md:p-0 dark:text-white dark:hover:text-gray-400"
              >
                <BiHome className="mr-1 sm:h-6 md:h-5 lg:h-5" />
                Home
              </a>
              <a
                href="#"
                className="flex py-2 pr-4 pl-3 text-gray-700 rounded  md:border-0 md:p-0 dark:text-white dark:hover:text-gray-400"
              >
                <BiMoney className="mr-1 sm:h-6 md:h-5 lg:h-5" />
                Pricing
              </a>
              <a
                href="#"
                className="flex py-2 pr-4 pl-3 text-gray-700 rounded  md:border-0 md:p-0 dark:text-white dark:hover:text-gray-400"
              >
                <BiBookAlt className="mr-1 sm:h-6 md:h-5 lg:h-5" />
                Docs
              </a>
              <a
                href="#"
                className="flex py-2 pr-4 pl-3 text-gray-700 rounded  md:border-0 md:p-0 dark:text-white dark:hover:text-gray-400"
              >
                <BiSupport className="mr-1 sm:h-6 md:h-5 lg:h-5" />
                Support
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
