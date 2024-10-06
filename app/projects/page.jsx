import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import ProjectCard from "../components/ProjectCard";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

const projects = [
  {
    projectName: "Taco Fiesta Website",
    projectDescription:
      "A modern website for ordering tacos online with delivery options.",
    projectStatus: "Active",
    projectDueDate: "2024-11-15",
    lastActivity: "2024-10-01",
    developer: "Jane Smith",
  },
  {
    projectName: "Coffee Shop Ordering App",
    projectDescription:
      "Mobile app for pre-ordering and paying for coffee before arriving at the shop.",
    projectStatus: "Active",
    projectDueDate: "2024-12-01",
    lastActivity: "2024-09-28",
    developer: "Tom Brown",
  },
  {
    projectName: "Sushi Place Digital Menu",
    projectDescription:
      "An interactive digital menu for a sushi restaurant, featuring photos and descriptions.",
    projectStatus: "Completed",
    projectDueDate: "2024-09-10",
    lastActivity: "2024-09-09",
    developer: "Emily Davis",
  },
  {
    projectName: "Pasta House Reservation System",
    projectDescription:
      "An online reservation system for booking tables at Pasta House.",
    projectStatus: "Active",
    projectDueDate: "2024-11-30",
    lastActivity: "2024-10-02",
    developer: "Michael Johnson",
  },
  {
    projectName: "Bakery Product Showcase",
    projectDescription:
      "A portfolio-style website to showcase the bakery's best products.",
    projectStatus: "Paused",
    projectDueDate: "2024-11-05",
    lastActivity: "2024-09-22",
    developer: "Sarah Lee",
  },
  {
    projectName: "Steakhouse Social Media Integration",
    projectDescription:
      "Integrating social media feeds and posts into the steakhouse's homepage.",
    projectStatus: "Active",
    projectDueDate: "2024-10-30",
    lastActivity: "2024-10-03",
    developer: "Robert Green",
  },
  {
    projectName: "Pizza Restaurant Loyalty Program",
    projectDescription:
      "A digital loyalty program system for rewarding frequent customers.",
    projectStatus: "Active",
    projectDueDate: "2024-12-10",
    lastActivity: "2024-10-01",
    developer: "Laura Wilson",
  },
  {
    projectName: "Burger Joint Online Ordering",
    projectDescription:
      "An online ordering system for a burger joint, featuring customization options.",
    projectStatus: "Completed",
    projectDueDate: "2024-08-25",
    lastActivity: "2024-08-24",
    developer: "Chris Martinez",
  },
  {
    projectName: "Vegan Cafe Blog",
    projectDescription:
      "A blog website for sharing vegan recipes and promoting cafe events.",
    projectStatus: "Active",
    projectDueDate: "2024-11-20",
    lastActivity: "2024-10-02",
    developer: "Daniel Garcia",
  },
  {
    projectName: "BBQ Spot Catering Inquiry Form",
    projectDescription:
      "An online form for catering inquiries at the BBQ Spot restaurant.",
    projectStatus: "Paused",
    projectDueDate: "2024-11-01",
    lastActivity: "2024-09-30",
    developer: "Sophia Robinson",
  },
  {
    projectName: "Seafood Shack Email Newsletter",
    projectDescription:
      "Creating a subscription-based email newsletter to promote seafood specials.",
    projectStatus: "Active",
    projectDueDate: "2024-10-20",
    lastActivity: "2024-10-03",
    developer: "Ethan Carter",
  },
  {
    projectName: "Ice Cream Parlor Photo Gallery",
    projectDescription:
      "An interactive photo gallery for showcasing ice cream flavors and customer experiences.",
    projectStatus: "Completed",
    projectDueDate: "2024-09-15",
    lastActivity: "2024-09-14",
    developer: "Olivia White",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
      
    </ul>
  );
}
