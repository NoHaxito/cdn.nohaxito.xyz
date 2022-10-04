import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa/index.js";
import ThemeToggle from "../ThemeToggle";
import AvatarDropdown from "./elements/AvatarDropdown";
import Drawer from "./Drawer";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <nav className="bg-white px-2 sm:px-4 py-2.5 border-b border-gray-700/50 lg:border-none dark:bg-slate-900 fixed  w-full z-30 top-0 left-0">
        <div className=" flex flex-wrap justify-between items-center mx-auto">
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
          <div className="flex space-x-2 md:order-2 select-none">
            <ThemeToggle />
            <AvatarDropdown />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center lg:hidden p-2 ml-3 text-sm text-gray-500 rounded-lg dark:text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className={`${isOpen ? "hidden" : "h-6 w-6"}`} />
              <FaTimes
                className={`${
                  isOpen ? "hover:animate-bounce h-6 w-6" : "hidden"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
