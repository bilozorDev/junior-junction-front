"use client";

import { useState } from "react";
import {
  Description,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Field,
  Label,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ProtectedRoute from "../components/ProtectedRoute";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];
const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const layout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div>
        <Disclosure
          as="div"
          className="relative overflow-hidden bg-sky-700 pb-32"
        >
          <nav className="relative z-10 border-b border-teal-500 border-opacity-25 bg-transparent data-[open]:bg-sky-900 lg:border-none lg:bg-transparent data-[open]:lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=teal&shade=400"
                      className="block h-8 w-auto"
                    />
                  </div>
                  <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                    <div className="flex">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-black bg-opacity-25"
                              : "hover:bg-sky-800",
                            "rounded-md px-3 py-2 text-sm font-medium text-white"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-sky-100 focus-within:text-gray-400">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search"
                        className="block w-full rounded-md border-0 bg-sky-700/50 py-1.5 pl-10 pr-3 text-white placeholder:text-sky-100 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block h-6 w-6 flex-shrink-0 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden h-6 w-6 flex-shrink-0 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
                <div className="hidden lg:ml-4 lg:block">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <MenuButton className="relative flex rounded-full text-sm text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src={user.imageUrl}
                            className="h-8 w-8 rounded-full"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                            >
                              {item.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="bg-sky-900 lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-black bg-opacity-25"
                        : "hover:bg-sky-800",
                      "block rounded-md px-3 py-2 text-base font-medium text-white"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-sky-800 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-sky-200">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-3 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </nav>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden data-[open]:bottom-0 lg:inset-y-0 data-[open]:lg:inset-y-0"
          >
            <div className="absolute inset-0 flex">
              <div
                style={{ backgroundColor: "#0a527b" }}
                className="h-full w-1/2"
              />
              <div
                style={{ backgroundColor: "#065d8c" }}
                className="h-full w-1/2"
              />
            </div>
            <div className="relative flex justify-center">
              <svg
                width={1750}
                height={308}
                viewBox="0 0 1750 308"
                className="flex-shrink-0"
              >
                <path
                  d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                  fill="#0369a1"
                />
                <path
                  d="M1465.84 308L16.816 0H1750v308h-284.16z"
                  fill="#065d8c"
                />
                <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                <path
                  d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                  fill="#0a4f76"
                />
              </svg>
            </div>
          </div>
          <header className="relative py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Settings
              </h1>
            </div>
          </header>
        </Disclosure>

        <main className="relative -mt-32">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                            : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current
                              ? "text-teal-500 group-hover:text-teal-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                          )}
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>

                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default layout;
