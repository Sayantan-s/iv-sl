import { formatToK } from "@utils/formatToK";
import clsx from "clsx";
import { FC } from "react";
import { IMetric } from ".";
import { Card } from "@components/atoms/Card";

export const MetricCard: FC<IMetric> = ({
  label: key,
  current: value,
  growth,
  icon: Icon,
}) => {
  return (
    <Card
      key={key}
      className="bg-white flex flex-col justify-between xs:aspect-auto aspect-square"
    >
      <h4 className="text-base text-gray-700">{key}</h4>
      <div>
        <div className="flex items-start gap-2 mt-6">
          <div className="sm:w-10 w-8 flex-shrink-0 bg-white-50 border border-gray-200 aspect-square flex items-center justify-center rounded-full">
            <Icon className="sm:size-5 size-4 text-orange-600" />
          </div>
          <p className="sm:text-3xl text-xl text-gray-700 mt-0.5 font-normal">
            {formatToK(value!)}
          </p>
        </div>
        <p className="sm:text-sm text-xs mt-1.5">
          <span
            className={clsx(" font-medium", growth <= 0 ? "text-rose-500" : "")}
          >
            {growth > 0 ? `+${growth}` : growth}%
          </span>{" "}
          <span className="text-gray-400">vs last month</span>
        </p>
      </div>
    </Card>
  );
};
