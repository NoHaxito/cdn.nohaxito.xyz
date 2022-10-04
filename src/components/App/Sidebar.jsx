import {
  HiCog,
  HiDocumentReport,
  HiHome,
  HiSearch,
} from "react-icons/hi/index.js";
import SideLink from "./elements/SideLink";

export default function Sidebar() {
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
      name: "Settings",
      icon: <HiCog className={LINK_ICON_STYLES} />,
    },
  ];
  return (
    <>
      <aside
        id="sidebar"
        className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white dark:bg-slate-900 divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li>
                  <form action="#" method="GET" className="">
                    <label htmlFor="mobile-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiSearch className="w-5 h-5 text-gray-500 dark:text-white" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
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
          </div>
        </div>
      </aside>
      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
    </>
  );
}
