import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const onClick = () => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };
  return (
    <>
      <button
        onClick={onClick}
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
