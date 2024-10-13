"use client";
import {
  Disclosure,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  // const currentUser = {displayName: "MeK"}
  const { currentUser, logOut } = useAuthContext();
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      const TOP_OFFSET = 60;
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Disclosure as="nav" className="text-white fixed top-0 z-20 w-full">
      <div
        className={`px-4 md:px-16 py-6 transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
          </Link>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="mek" src="" className="h-7 w-auto" />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    src={currentUser?.photoURL || "/images/default-slate.png"}
                    className="h-8 w-8 rounded-full"
                    alt="user"
                    referrerPolicy="no-referrer"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Register
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <span
                    onClick={() => logOut()}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2"></div>
      </DisclosurePanel>
    </Disclosure>
  );
}
