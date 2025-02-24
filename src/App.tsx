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

  const top5SongsData = barChartData?.map((data) => ({
    streamCount: data.streamCount,
    song: data.song,
    artist: getArtist(data.artist),
    fill: "var(--color-orange-300)",
  }));

  const max = top5SongsData.reduce(
    (acc, curr, index) => {
      const max = Math.max(curr.streamCount, acc.currentMax);
      if (max !== acc.currentMax) {
        acc.maxIndex = index;
        acc.currentMax = max;
      }
      return acc;
    },
    {
      activeIndex: null,
      currentMax: 0,
    } as unknown as IMaxIndex
  );

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[40rem] p-4 shadow shadow-gray-400/10 bg-white">
          {metricData.map(({ key, current: value, growth }) => (
            <div
              key={key}
              className="bg-white p-4 border border-gray-200 rounded-3xl"
            >
              <h4 className="text-base text-gray-700">{key}</h4>
              <div className="flex items-start gap-2 mt-6">
                <div className="w-10 flex-shrink-0 bg-white-50 border border-gray-200 aspect-square flex items-center justify-center rounded-full">
                  <UserGroupIcon className="size-5 text-orange-600" />
                </div>
                <p className="text-3xl text-gray-700 mt-0.5 font-normal">
                  {formatToK(value!)}
                </p>
              </div>
              <p className="text-sm mt-1.5">
                <span
                  className={clsx(
                    " font-medium",
                    growth <= 0 ? "text-rose-500" : ""
                  )}
                >
                  {growth > 0 ? `+${growth}` : growth}%
                </span>{" "}
                <span className="text-gray-400">vs last {IPeriod.Monthly}</span>
              </p>
            </div>
          ))}
          <div className="bg-orange-500 p-4 border border-orange-200 rounded-3xl">
            <div className="flex items-start gap-2">
              <div className="w-14 h-14 relative rounded-full overflow-hidden">
                <img
                  src={topArtist.profilePic}
                  alt=""
                  className="h-full w-full absolute left-0 top-0 object-cover"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
              </div>
              <div>
                <h4 className="text-base text-orange-100">{topArtist.name}</h4>
                <div className="text-[0.6rem] flex gap-1 text-orange-300 mt-1">
                  {topArtist.genre?.map((genre) => (
                    <button
                      key={genre}
                      className="px-2 py-0.5 border border-orange-300 rounded-full"
                    >
                      # {genre}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-6">
              <p className="text-3xl text-orange-100 mt-0.5 font-normal">
                {formatToK(topArtist.streamCount)}{" "}
                <span className="text-orange-300 text-sm">streams</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8">
          <h1 className="text-gray-700 text-lg font-light">Sales Revenue</h1>
          <div className="mt-8">
            <div className="flex gap-4">
              <h2 className="text-gray-700 text-5xl font-medium">
                <span className="text-gray-400">$</span>
                {formatToK(revenue.total)}
              </h2>
              <div className="flex items-center gap-2 text-gray-700">
                <button className="w-6 aspect-square rounded-full flex items-center justify-center bg-green-100 text-green-700">
                  <ChevronUpIcon className="size-4" stroke="8" />
                </button>
                <span>{revenue.growth}%</span>
              </div>
            </div>
            <p className="text-gray-400 mt-1">
              This is a sales revenue overview
            </p>
          </div>
        </div>
        <Chart.PieChart
          nameKey="source"
          dataKey="revenue"
          data={revenueChartData}
          config={{
            revenue: {
              label: "Revenue",
            },
            subscriptions: {
              label: "Subscriptions",
              color: "var(--color-orange-500)",
            },
            ads: { label: "Ads", color: "var(--color-orange-900)" },
          }}
          labelListClassName="fill-orange-50"
          tooltipContentClassName="bg-white border border-gray-200 min-w min-w-[10rem] rounded-sm"
          onPieClick={() => {}}
          tooltipValueFormatter={(value, payload) => {
            return (
              <div
                key={value.toString()}
                className="flex justify-between w-full"
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={clsx("block w-3 h-3 rounded-sm")}
                    style={{
                      backgroundColor: payload.payload.fill,
                    }}
                  />
                  <span className="text-gray-400">Revenue</span>
                </div>
                <span className="font-semibold text-gray-700">
                  {" "}
                  ${`${formatToK(+value)}`}
                </span>
              </div>
            );
          }}
        />
        {barChartData ? (
          <Chart.BarChart
            data={top5SongsData}
            config={{
              streamCount: {
                label: "Streams",
                color: "var(--color-orange-100)",
              },
            }}
            dataKey="streamCount"
            labelListClassName="fill-gray-900 font-semibold"
            tooltipContentClassName="bg-white border border-gray-200 min-w min-w-[10rem] rounded-md"
            tooltipValueFormatter={(value, label, { artist, song }) => {
              return (
                <div>
                  <div className="font-semibold">
                    <span className="text-orange-300">{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
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
                      <p className="text-gray-700 font-semibold">{song.name}</p>
                      <p className="text-gray-400">{artist.name}</p>
                    </div>
                  </div>
                </div>
              );
            }}
            activeConfig={{
              stroke: "var(--color-orange-600)",
              index: max.maxIndex!,
              fill: "var(--color-orange-500)",
            }}
            radius={100}
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
            tooltipContentClassName="bg-white border border-gray-200 min-w min-w-[10rem] rounded-sm"
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
                    <span className="text-gray-400">{label}</span>
                  </div>
                  <span className="font-semibold">
                    {" "}
                    {`${formatToK(+value)}`}
                  </span>
                </div>
              );
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
