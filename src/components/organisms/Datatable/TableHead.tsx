import clsx from "clsx";
import { map } from "es-toolkit/compat";

const TABLE_HEAD = [
  {
    label: "Songs/Artist",
    className: "flex-[0.4] lg:min-w-auto min-w-[25rem]",
  },
  { label: "User", className: "flex-[0.25] lg:min-w-auto min-w-[15rem]" },
  {
    label: "Date Streamed On",
    className: "flex-[0.25] lg:min-w-auto min-w-[10rem]",
  },
  { label: "Streams", className: "flex-[0.1] lg:min-w-auto" },
];

export const TableHead = () => {
  return (
    <div className="sticky top-0 left-0 z-30">
      <div className="flex gap-2 p-2 bg-white">
        {map(TABLE_HEAD, ({ label, className }) => (
          <div
            role="tablist"
            key={label}
            className={clsx(className, "text-sm gap-2 text-gray-400")}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};
