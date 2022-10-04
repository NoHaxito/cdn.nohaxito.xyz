import { HiCog, HiDocumentReport, HiHome, HiSearch } from "react-icons/hi/index.js";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SideLink from "./elements/SideLink";
export default function SideNav({ isOpen, setIsOpen }) {
  const LINK_ICON_STYLES =
    "w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white  transition duration-150 ";
  const links = [
    {
      href: "/app",
      name: "Home",
      icon: <HiHome className={LINK_ICON_STYLES} />,
    },
    {
      href: "/app/repo",
      name: "Repositories",
      icon: <HiDocumentReport className={LINK_ICON_STYLES} />,
    },
    {
      href: "/app/settings",
      name: "Home",
      icon: <HiCog className={LINK_ICON_STYLES} />,
    },
  ];
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="h-screen dark:bg-slate-900"
      >
        <div className="dark:bg-slate-900 h-screen p-4">
          <h1 className="dark:text-white text-center font-bold text-2xl pb-2">
            Navigation Bar
          </h1>
          <ul className="mt-2 space-y-2 pb-2">
            <li>
              <form action="#" method="GET" className="">
                <label htmlFor="mobile-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiSearch className="h-5 w-5 mr-4 text-gray-500 dark:text-white" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search-bar"
                    className="bg-gray-200 dark:bg-slate-600 text-gray-900 dark:text-white text-sm rounded-lg  block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
              <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </li>
            {links.map((link, key) => {
              return (
                <SideLink
                  href={link.href}
                  icon={link.icon}
                  name={link.name}
                  key={key}
                />
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
}
