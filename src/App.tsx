import { ChevronUpIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { formatToK } from "./utils/formatToK";
import { useMemo } from "react";
import { useGetRevenue } from "./store/hooks/useGetRevenue";
import { useGetStreams, useGetUsers } from "./store/hooks/useGetMetrics";
import { IPeriod } from "./store/apis/endpoints/metrics/type";
import clsx from "clsx";
import { useGetTopArtist } from "./store/hooks/useGetTopArtist";
import { metricsApi } from "./store/apis/endpoints/metrics";
import { Chart } from "./components/organisms/chart";
import { useGetHitSongs } from "./store/hooks/useGetHitSongs";
import { useGetLazyArtist } from "./store/hooks/useGetLazyArtist";
import { RevenueCard } from "./components/templates/RevenueCard";
import { MetricsCards } from "./components/templates/MetricsCard";
import { Datatable } from "./components/templates/Datatable";

interface IMaxIndex {
  maxIndex: number | null;
  currentMax: number;
}

const App = () => {
  const { data: users } = useGetUsers({ period: IPeriod.Monthly });
  const { data: revenue } = useGetRevenue();
  const { data: streams } = useGetStreams({ period: IPeriod.Monthly });
  const { data: topArtist } = useGetTopArtist();

  const { data: chartData } = metricsApi.useGrowthQuery(2024);
  const { data: barChartData } = useGetHitSongs();
  const getArtist = useGetLazyArtist();

  const metricData = useMemo(
    () => [
      {
        key: "Total Users",
        current: users.total.current,
        growth: users.total.growth,
      },
      {
        key: "Active Users",
        current: users.active.current,
        growth: users.active.growth,
      },
      {
        key: "Total Streams",
        current: streams.total.current,
        growth: streams.total.growth,
      },
    ],
    [users]
  );

  const revenueChartData = [
    {
      source: "subscriptions",
      revenue: revenue.subscriptions,
      fill: "var(--color-orange-500)",
    },
    { source: "ads", revenue: revenue.ads, fill: "var(--color-orange-900)" },
  ];

  return (
    <div className="w-full bg-gray-100 min-h-screen py-10">
      <div className="mx-auto w-full max-w-[1300px] rounded-2xl overflow-hidden bg-white p-6 space-y-8">
        <div className="flex gap-4">
          <RevenueCard />
          <MetricsCards />
        </div>
        <div className="flex">
          <Datatable />
          <div></div>
        </div>
        {/* {barChartData ? (
          <Chart.BarChart
            data={top5SongsData}
            config={{
              streamCount: {
                label: "Streams",
                color: "var(--color-orange-100)",
              },
            }}
            radius={20}
            dataKey="streamCount"
            labelListClassName="fill-gray-900 font-semibold"
            tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-lg p-3 shadow-xl shadow-gray-900/30"
            tooltipValueFormatter={(_, __, { artist, song }) => {
              return (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full relative overflow-hidden">
                    <img
                      src={
                        "https://i.pinimg.com/1200x/fe/d7/9a/fed79a5e7fcb0aceb8d17059e7bd5f4c.jpg"
                      }
                      alt={`${song.id}_${song.name}`}
                      className="absolute top-0 left-0 object-cover"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 font-semibold max-w-[10rem] truncate">
                      {song.name}
                    </p>
                    <p className="text-gray-400 max-w-[10rem] truncate">
                      by {artist.name}
                    </p>
                  </div>
                </div>
              );
            }}
            activeConfig={{
              index: max.maxIndex!,
              activeShades: {
                upShade: "var(--color-orange-500)",
                downShade: "var(--color-orange-400)",
              },
              inactiveShades: {
                upShade: "var(--color-orange-100)",
                downShade: "var(--color-orange-50)",
              },
            }}
          />
        ) : null}
        {chartData ? (
          <Chart.LineChart
            className="p-6"
            config={{
              activeUsers: { label: "Active Users" },
              totalUsers: { label: "Total Users" },
            }}
            data={chartData.data}
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
                <div
                  key={value.toString()}
                  className="flex justify-between w-full"
                >
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
        ) : null} */}
      </div>
    </div>
  );
};

export default App;
