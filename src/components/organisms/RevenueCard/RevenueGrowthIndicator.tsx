import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC } from "react";

interface Props {
  growth: number;
}

export const RevenueGrowthIndicator: FC<Props> = ({ growth }) => {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <button
        role="div"
        tabIndex={-1}
        className={clsx(
          "w-6 aspect-square rounded-full flex items-center justify-center",
          growth < 0
            ? "bg-rose-100 text-rose-700"
            : "bg-green-100 text-green-700"
        )}
      >
        {growth < 0 ? (
          <ChevronDownIcon className="size-4" stroke="8" />
        ) : (
          <ChevronUpIcon className="size-4" stroke="8" />
        )}
      </button>
      <span>{growth}%</span>
    </div>
  );
};
