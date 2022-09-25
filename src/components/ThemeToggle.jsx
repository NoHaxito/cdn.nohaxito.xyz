import { BiMoon, BiSun } from "react-icons/bi/index";

export default function ThemeToggle() {
  return (
    <>
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"
      >
        <BiMoon className="hidden w-5 h-5" id="theme-toggle-dark-icon" />
        <BiSun className="hidden w-5 h-5" id="theme-toggle-light-icon" />
      </button>
    </>
  );
}
