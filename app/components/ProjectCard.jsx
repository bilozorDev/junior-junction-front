import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const statuses = {
  Active: "text-green-700 bg-green-50 ring-green-600/20",
  Draft: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const project = {
  projectName: "Pizza website",
  projectDescription: "A website for ordering pizza online",
  projectStatus: "Active",
  projectDueDate: "2023-01-23",
  lastActivity: "2023-01-23",
  developer: "John Doe",
};
const client = {
  id: 1,
  name: "Tuple",
  imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
  lastInvoice: {
    date: "December 13, 2022",
    dateTime: "2022-12-13",
    amount: "$2,000.00",
    status: "Overdue",
  },
};
export default function ProjectCard({ clients }) {
  return (
    <>
      <li className="overflow-hidden rounded-xl border border-gray-200">
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <div className="text-sm font-medium leading-6 text-gray-900">
            {project.projectName}
          </div>
          <div
            className={classNames(
              statuses[project.projectStatus],
              "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
            )}
          >
            {project.projectStatus}
          </div>
          <Menu as="div" className="relative ml-auto">
            <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  View<span className="sr-only">, {client.name}</span>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  Edit<span className="sr-only">, {client.name}</span>
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Project due date</dt>
            <dd className="text-gray-700">
              <time dateTime={project.projectDueDate}>
                {project.projectDueDate}
              </time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Last activity</dt>
            <dd className="text-gray-700">
              <time dateTime={project.lastActivity}>
                {project.lastActivity}
              </time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Developer</dt>
            <dd className="flex items-start gap-x-2">
              <div className="font-medium text-gray-900 ">
                <Link href="/developers/profile" className="flex flex-row space-x-2">
                <span>{project.developer}</span>{" "}
                  <LinkIcon className="h-4 w-4" />
                </Link>
              </div>
            </dd>
          </div>
        </dl>
      </li>
    </>
  );
}
