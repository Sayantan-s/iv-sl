import { formatToK } from "../../utils/formatToK";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useGetRevenue } from "../../store/hooks/useGetRevenue";
import { Chart } from "../organisms/chart";
import { useCallback, useMemo } from "react";
import clsx from "clsx";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const CHART_CONFIG = {
  revenue: {
    label: "Revenue",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "var(--color-orange-500)",
  },
  ads: { label: "Ads", color: "var(--color-orange-900)" },
};

const chartShades = [
  {
    upShade: "var(--color-orange-500)",
    downShade: "var(--color-orange-400)",
  },
  {
    upShade: "var(--color-orange-900)",
    downShade: "var(--color-orange-800)",
  },
];

export const RevenueCard = () => {
  const { data: revenue } = useGetRevenue();

  const revenueChartData = useMemo(
    () => [
      {
        source: "subscriptions",
        revenue: revenue.subscriptions,
        fill: "var(--color-orange-500)",
      },
      { source: "ads", revenue: revenue.ads, fill: "var(--color-orange-900)" },
    ],
    [revenue]
  );

  const tooltipFormatter = useCallback(
    (value: ValueType, payload: Payload<ValueType, NameType>) => {
      return (
        <div key={value.toString()} className="flex justify-between w-full">
          <div className="flex items-center gap-1.5">
            <span
              className={clsx("block w-3 h-3 rounded-sm")}
              style={{
                backgroundColor: payload.payload.fill,
              }}
            />
            <span className="text-gray-300">Revenue</span>
          </div>
          <span className="font-semibold text-gray-100">
            {" "}
            ${`${formatToK(+value)}`}
          </span>
        </div>
      );
    },
    []
  );

  return (
    <div className="bg-white flex items-center flex-[0.45] py-4 pl-8 pr-2 border border-gray-200 rounded-2xl">
      <div className="flex-[0.5]">
        <h1 className="text-gray-700 text-lg font-light">Sales Revenue</h1>
        <div className="mt-8">
          <div className="flex gap-4">
            <h2 className="text-gray-700 text-5xl font-medium">
              <span className="text-gray-400">$</span>
              {formatToK(revenue.total)}
            </h2>
            <div className="flex items-center gap-2 text-gray-700">
              <button
                role="div"
                tabIndex={-1}
                className="w-6 aspect-square rounded-full flex items-center justify-center bg-green-100 text-green-700"
              >
                <ChevronUpIcon className="size-4" stroke="8" />
              </button>
              <span>{revenue.growth}%</span>
            </div>
          </div>
          <p className="text-gray-400 mt-1">This is a sales revenue overview</p>
        </div>
      </div>
      <Chart.PieChart
        radius={14}
        className="flex-[0.5]! p-0! w-full"
        nameKey="source"
        dataKey="revenue"
        data={revenueChartData}
        config={CHART_CONFIG}
        labelListClassName="fill-orange-50"
        onPieClick={() => {}}
        tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-sm px-3 py-2 shadow-xl shadow-gray-900/30"
        tooltipValueFormatter={tooltipFormatter}
        shadeColors={chartShades}
      />
    </div>
  );
};
