import clsx from "clsx";
import { formatToK } from "../../utils/formatToK";
import { Card } from "../organisms/atoms/Card";
import { metricsApi } from "../../store/apis/endpoints/metrics";
import { EUserGrowthPeriod } from "../../store/apis/endpoints/metrics/type";
import { FC, useState } from "react";
import { Chart } from "../organisms/chart";
import { ToggleGroup } from "../utils/ToggleGroup";

const USERGROWTH_PERIOD = [
  EUserGrowthPeriod.THREE_MO,
  EUserGrowthPeriod.SIX_MO,
  EUserGrowthPeriod.ONE_Y,
];

export const Usergrowth = () => {
  const [userGrowthPeriodIndex, setUserGrowthPeriodIndex] = useState(2);

  return (
    <Card className="flex-1 flex flex-col">
      <div className="flex justify-between flex-1">
        <div>
          <h2 className="text-gray-700 text-base">User Growth Overview</h2>
          <p className="text-gray-400 text-xs">User growth over period</p>
        </div>
        <ToggleGroup
          selectedItemIndex={userGrowthPeriodIndex}
          onSelect={setUserGrowthPeriodIndex}
          className="space-x-2"
        >
          {USERGROWTH_PERIOD.map((period) => (
            <button
              key={period}
              className="text-xs cursor-pointer aria-[checked=true]:bg-orange-100 aria-[checked=true]:text-orange-400 aspect-square w-8 rounded-md text-gray-400"
            >
              {period}
            </button>
          ))}
        </ToggleGroup>
      </div>
      <UserGrowthChart period={USERGROWTH_PERIOD[userGrowthPeriodIndex]} />
    </Card>
  );
};

interface Props {
  period: EUserGrowthPeriod;
}

const UserGrowthChart: FC<Props> = ({ period }) => {
  const { data, isLoading } = metricsApi.useGrowthQuery(period);

  const chartData = data!;

  if (isLoading) return "fallback";

  return (
    <Chart.LineChart
      className="p-0 h-auto"
      config={{
        activeUsers: { label: "Active Users" },
        totalUsers: { label: "Total Users" },
      }}
      data={chartData}
      convention={[
        {
          dataKey: "activeUsers",
          color: "var(--color-orange-500)",
        },
        {
          dataKey: "totalUsers",
          color: "var(--color-orange-900)",
        },
      ]}
      xAxisKey="month"
      xAxisColor="var(--color-gray-500)"
      cartesianGridColor="var(--color-gray-100)"
      tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-sm px-3 py-2 shadow-xl shadow-gray-900/30"
      tooltipValueFormatter={(value, label, color) => {
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
      }}
    />
  );
};
