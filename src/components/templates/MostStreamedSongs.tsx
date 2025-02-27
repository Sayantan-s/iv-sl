import { FC, useState } from "react";
import { songsApi } from "../../store/apis/endpoints/songs";
import { Card } from "../organisms/atoms/Card";
import { Chart } from "../organisms/chart";
import { IPeriod } from "../../store/apis/endpoints/metrics/type";
import { ToggleGroup } from "../utils/ToggleGroup";

const PERIODS = [
  { value: IPeriod.Monthly, label: "Monthly" },
  { value: IPeriod.Yearly, label: "Yearly" },
];

export const MostStreamedSongs = () => {
  const [periodIndex, setPeriodIndex] = useState(0);

  const handleSetIndex = (index: number) => () => setPeriodIndex(index);

  return (
    <Card className="flex-1 flex flex-col">
      <div className="flex flex-1 justify-between items-start">
        <div>
          <h2 className="text-gray-700 text-base">
            Top 5 {periodIndex ? "Monthly" : "Yearly"} Hits
          </h2>
          <p className="text-gray-400 text-xs">
            Stats of top five hits over period
          </p>
        </div>
        <ToggleGroup
          selectedItemIndex={periodIndex}
          onSelect={setPeriodIndex}
          className="flex items-start p-1 border rounded-full relative bg-gray-100 border-gray-200"
        >
          {PERIODS.map((period, index) => (
            <button
              onClick={handleSetIndex(index)}
              className="text-xs z-10 cursor-pointer aria-[checked=true]:bg-white bg-transparent py-1 px-2.5 rounded-full aria-[checked=true]:shadow"
              aria-checked={index === periodIndex}
            >
              {period.label}
            </button>
          ))}
        </ToggleGroup>
      </div>
      <StreamSongsChart period={PERIODS[periodIndex].value} />
    </Card>
  );
};

interface IMaxIndex {
  maxIndex: number | null;
  currentMax: number;
}

interface Props {
  period: IPeriod;
}

const StreamSongsChart: FC<Props> = ({ period }) => {
  const { data, isLoading } = songsApi.useHitsQuery(period);

  const songIds = data?.ids;

  const top5SongsData = songIds?.map((songId) => {
    const song = data?.entities[songId];
    return {
      streamCount: song?.streamCount,
      song: song?.song,
      artist: song?.artist,
      fill: "var(--color-orange-300)",
    };
  });

  const max = top5SongsData?.reduce(
    (acc, curr, index) => {
      const max = Math.max(curr.streamCount!, acc.currentMax);
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

  if (isLoading) return "fallback...";

  return (
    <Chart.BarChart
      data={top5SongsData!}
      config={{
        streamCount: {
          label: "Streams",
          color: "var(--color-orange-100)",
        },
      }}
      className="h-auto py-2! px-0!"
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
                alt={`${song?.id}_${song?.name}`}
                className="absolute top-0 left-0 object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
            </div>
            <div>
              <p className="text-gray-200 font-semibold max-w-[10rem] truncate">
                {song?.name}
              </p>
              <p className="text-gray-400 max-w-[10rem] truncate">
                by {artist?.name}
              </p>
            </div>
          </div>
        );
      }}
      activeConfig={{
        index: max!.maxIndex!,
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
  );
};
