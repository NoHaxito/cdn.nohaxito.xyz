import { FaHeadset } from "react-icons/fa/index.js";
import ThemeToggle from "../ThemeToggle";

export default function AppHeader() {
  return (
    <div className="">
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-slate-900 fixed  w-full z-20 top-0 left-0 border-b border-gray-400 dark:border-gray-800/70">
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
          <div className="flex space-x-2 md:order-2 select-none">
            <ThemeToggle />
            <a
              href="https://discord.com/invite/uploader.io"
              target={"_blank"}
              className="flex text-white bg-blue-700 hover:border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-800 dark:hover:bg-purple-900 dark:focus:ring-purple-800 items-center justify-center"
            >
              <FaHeadset className="h-5 w-5 mr-2" />
              Support
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
