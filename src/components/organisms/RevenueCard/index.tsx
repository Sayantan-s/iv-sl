import { formatToK } from "@utils/formatToK";
import { useGetRevenue } from "@store/hooks/useGetRevenue";
import { Chart } from "@components/atoms/chart";
import { useCallback, useMemo } from "react";
import clsx from "clsx";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { useDispatch } from "@store";
import { songsActions } from "@store/slices/songs";
import { ERevenueSource } from "@store/apis/endpoints/songs/type";
import { Card } from "@components/atoms/Card";
import { Fallback } from "./Fallback";
import { RevenueGrowthIndicator } from "./RevenueGrowthIndicator";

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
  const { data: revenue, loading } = useGetRevenue();
  const dispatch = useDispatch();

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

  const handlePieClick = (value: (typeof revenueChartData)[number]) => {
    const source = value.source as ERevenueSource;
    dispatch(
      songsActions.updateFilters({
        key: "search.revenueType",
        value: source,
      })
    );
  };

  if (loading) return <Fallback />;

  return (
    <Card className="order-1 lg:order-0 bg-white flex md:flex-row flex-col items-center flex-[0.45] md:py-4! md:pl-8! md:pr-2! border border-gray-200">
      <div className="xl:flex-[0.5] flex-[0.4] flex-shrink-1 md:text-left text-center md:mt-0 mt-20">
        <h1 className="text-gray-700 text-lg font-light">
          Revenue Distribution
        </h1>
        <div className="md:mt-8 mt-4">
          <div className="flex gap-4 md:justify-start justify-center">
            <h2 className="text-gray-700 text-5xl font-medium">
              <span className="text-gray-400">$</span>
              {formatToK(revenue.total)}
            </h2>
            <RevenueGrowthIndicator growth={revenue.growth} />
          </div>
          <p className="text-gray-400 md:mt-1 mt-2 text-[0.95rem]">
            This is a revenue distribution overview
          </p>
        </div>
      </div>
      <Chart.PieChart
        radius={14}
        className="xl:flex-[0.5]! flex-[0.6] p-0! w-full flex-shrink-0 xl:flex-shrink-1 min-h-[15rem]"
        nameKey="source"
        dataKey="revenue"
        data={revenueChartData}
        config={CHART_CONFIG}
        labelListClassName="fill-orange-50"
        onPieClick={handlePieClick}
        tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-sm px-3 py-2 shadow-xl shadow-gray-900/30"
        tooltipValueFormatter={tooltipFormatter}
        shadeColors={chartShades}
      />
    </Card>
  );
};
