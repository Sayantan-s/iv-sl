import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useGetStreams, useGetUsers } from "@store/hooks/useGetMetrics";
import { IPeriod } from "@store/apis/endpoints/metrics/type";
import { useMemo } from "react";
import { MetricCard } from "@components/organisms/MetricsCard/MetricCard";
import { TopArtistCard } from "@components/organisms/MetricsCard/TopArtistCard";
import { map } from "es-toolkit/compat";
import { MetricCardsFallback } from "./MetricCardsFallback";

export interface IMetric {
  label: string;
  current: number;
  growth: number;
  icon: typeof UserIcon;
}

export const MetricsCards = () => {
  const { data: users } = useGetUsers({ period: IPeriod.Monthly });
  const { data: streams, loading } = useGetStreams({ period: IPeriod.Monthly });

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
    <div className="order-0 lg:order-1 grid grid-cols-2 grid-rows-2 gap-4 shadow shadow-gray-400/10 bg-white flex-[0.55]">
      {loading ? (
        <MetricCardsFallback />
      ) : (
        map(metricData, (metric) => (
          <MetricCard {...metric} key={metric.label} />
        ))
      )}
      <TopArtistCard />
    </div>
  );
};
