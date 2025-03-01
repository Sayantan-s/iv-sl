import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChartBarIcon,
  ChartPieIcon,
  PlusIcon,
  TableCellsIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC } from "react";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  className?: string;
}

const NAV = [
  {
    name: "Metrics",
    href: "#metrics",
    icon: <ChartPieIcon className="size-4 text-orange-400" />,
  },
  {
    name: "Table",
    href: "#table",
    icon: <TableCellsIcon className="size-4 text-orange-400" />,
  },
  {
    name: "Period Analytics",
    href: "#pa",
    icon: <ChartBarIcon className="size-4 text-orange-400" />,
  },
];

export const SpeedDial: FC<IProps> = ({ className }) => {
  return (
    <Popover
      className={"fixed bottom-2 cursor-pointer right-4 md:hidden block"}
    >
      {({ open }) => (
        <Fragment>
          <PopoverButton
            className={clsx(
              "z-100 w-10 h-10 flex items-center justify-center rounded-full text-orange-50 bg-gray-900 focus:outline-none",
              className
            )}
          >
            {open ? (
              <XMarkIcon className="size-5" />
            ) : (
              <PlusIcon className="size-5" />
            )}
          </PopoverButton>
          <PopoverPanel
            unmount
            className={
              "bg-white border w-[12rem] flex flex-col rounded-lg shadow-md shadow-gray-700/5 border-gray-200"
            }
            anchor={{
              to: "top end",
              gap: 10,
            }}
          >
            {NAV.map((navOption) => (
              <CloseButton
                key={navOption.name}
                as="a"
                href={navOption.href}
                className="flex items-center px-3 py-2 text-xs gap-1.5 group hover:bg-orange-100 focus:bg-orange-100 focus:outline-none"
              >
                {navOption.icon}
                <span className="text-gray-500">{navOption.name}</span>
              </CloseButton>
            ))}
          </PopoverPanel>
        </Fragment>
      )}
    </Popover>
  );
};
