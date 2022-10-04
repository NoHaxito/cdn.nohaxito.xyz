import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineLogout } from "react-icons/hi/index.js";
export default function AvatarDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" w-full justify-center">
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000"
            className="rounded-full h-10 w-10 cursor-pointer"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-800  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button className="hover:bg-gray-200/50 dark:hover:bg-slate-600/50 dark:text-white text-gray-500 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  <HiOutlineLogout className="h-4 w-4 mr-4" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
