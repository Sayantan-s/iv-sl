import { Chart } from "@components/atoms/chart";
import { Skeleton } from "@components/utils/Skeleton";
import { IPeriod } from "@store/apis/endpoints/metrics/type";
import { songsApi } from "@store/apis/endpoints/songs";
import { FC, useCallback } from "react";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface IMaxIndex {
  maxIndex: number | null;
  currentMax: number;
}

interface Props {
  period: IPeriod;
}

const CHART_CONFIG = {
  streamCount: {
    label: "Streams",
    color: "var(--color-orange-100)",
  },
};

export const StreamSongsChart: FC<Props> = ({ period }) => {
  const { data, isLoading, isFetching } = songsApi.useHitsQuery(period);

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

  const tooltipFormatter = useCallback(
    (
      _: ValueType,
      __: string,
      { artist, song }: NonNullable<typeof top5SongsData>[0]
    ) => {
      return (
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full relative overflow-hidden">
            <LazyLoadImage
              src={song?.pic}
              alt={`${song?.id}_${song?.name}`}
              className="object-cover"
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
    },
    []
  );

  if (isLoading) return <Skeleton className="h-full mt-10 rounded-2xl!" />;

  return (
    <Chart.BarChart
      isLoading={isFetching}
      data={top5SongsData!}
      config={CHART_CONFIG}
      className="h-auto py-2! px-0! flex-[0.8]"
      radius={20}
      dataKey="streamCount"
      labelListClassName="fill-gray-900 font-semibold"
      tooltipContentClassName="bg-gray-950/80 backdrop-blur-xl border-0 min-w min-w-[10rem] rounded-lg p-3 shadow-xl shadow-gray-900/30"
      tooltipValueFormatter={tooltipFormatter}
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
