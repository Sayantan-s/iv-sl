import { Chart } from "@components/atoms/chart";
import { Skeleton } from "@components/utils/Skeleton";
import { metricsApi } from "@store/apis/endpoints/metrics";
import { EUserGrowthPeriod } from "@store/apis/endpoints/metrics/type";
import { formatToK } from "@utils/formatToK";
import clsx from "clsx";
import { FC } from "react";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

interface Props {
  period: EUserGrowthPeriod;
}

const ChartConvention = [
  {
    dataKey: "activeUsers",
    color: "var(--color-orange-500)",
  },
  {
    dataKey: "totalUsers",
    color: "var(--color-orange-900)",
  },
];

const ChartConfig = {
  activeUsers: { label: "Active Users" },
  totalUsers: { label: "Total Users" },
};

export const UserGrowthChart: FC<Props> = ({ period }) => {
  const { data, isLoading, isFetching } = metricsApi.useGrowthQuery(period);

  const chartData = data || [];

  const tooltipFormatter = (value: ValueType, label: string, color: string) => {
    return (
      <div key={value.toString()} className="flex justify-between w-full">
        <div className="flex items-center gap-1.5">
          <span
            className={clsx("block w-3 h-3 rounded-sm")}
            style={{
              backgroundColor: color,
            }}
          />
          <span className="text-gray-300">{label}</span>
        </div>
        <span className="font-semibold text-gray-100">
          {" "}
          {`${formatToK(+value)}`}
        </span>
      </div>
    );
  };

  if (isLoading) return <Skeleton className="h-full mt-10 rounded-2xl!" />;

  return (
    <Chart.LineChart
      isLoading={isFetching}
      className="p-0 h-auto mt-4 flex-[0.8]"
      config={ChartConfig}
      data={chartData}
      convention={ChartConvention}
      xAxisKey="month"
      xAxisColor="var(--color-gray-500)"
      cartesianGridColor="var(--color-gray-100)"
      tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-sm px-3 py-2 shadow-xl shadow-gray-900/30"
      tooltipValueFormatter={tooltipFormatter}
    />
  );
};
