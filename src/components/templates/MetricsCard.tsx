import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useGetStreams, useGetUsers } from "../../store/hooks/useGetMetrics";
import { IPeriod } from "../../store/apis/endpoints/metrics/type";
import { FC, useMemo } from "react";
import { formatToK } from "../../utils/formatToK";
import clsx from "clsx";
import { useGetTopArtist } from "../../store/hooks/useGetTopArtist";

interface IMetric {
  label: string;
  current: number;
  growth: number;
  icon: typeof UserIcon;
}

export const MetricsCards = () => {
  const { data: users } = useGetUsers({ period: IPeriod.Monthly });
  const { data: streams } = useGetStreams({ period: IPeriod.Monthly });

  const metricData: IMetric[] = useMemo(
    () => [
      {
        label: "Total Users",
        current: users.total.current,
        growth: users.total.growth,
        icon: UserGroupIcon,
      },
      {
        label: "Active Users",
        current: users.active.current,
        growth: users.active.growth,
        icon: UserIcon,
      },
      {
        label: "Total Streams",
        current: streams.total.current,
        growth: streams.total.growth,
        icon: MusicalNoteIcon,
      },
    ],
    [users]
  );

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 shadow shadow-gray-400/10 bg-white flex-[0.55]">
      {metricData.map((metric) => (
        <MetricCard {...metric} label={metric.label} />
      ))}
      <TopArtistCard />
    </div>
  );
};

const TopArtistCard = () => {
  const { data: topArtist } = useGetTopArtist();

  return (
    <div className="bg-orange-500 p-4 border border-orange-200 rounded-2xl">
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
                tabIndex={-1}
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
  );
};

const MetricCard: FC<IMetric> = ({
  label: key,
  current: value,
  growth,
  icon: Icon,
}) => {
  return (
    <div key={key} className="bg-white p-4 border border-gray-200 rounded-2xl">
      <h4 className="text-base text-gray-700">{key}</h4>
      <div className="flex items-start gap-2 mt-6">
        <div className="w-10 flex-shrink-0 bg-white-50 border border-gray-200 aspect-square flex items-center justify-center rounded-full">
          <Icon className="size-5 text-orange-600" />
        </div>
        <p className="text-3xl text-gray-700 mt-0.5 font-normal">
          {formatToK(value!)}
        </p>
      </div>
      <p className="text-sm mt-1.5">
        <span
          className={clsx(" font-medium", growth <= 0 ? "text-rose-500" : "")}
        >
          {growth > 0 ? `+${growth}` : growth}%
        </span>{" "}
        <span className="text-gray-400">vs last {IPeriod.Monthly}</span>
      </p>
      <div
        className={`absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
          true ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-300`}
      />
    </div>
  );
};
