import { FC, PropsWithChildren } from "react";
import { metricsApi } from "../apis/endpoints/metrics";
import { songsApi } from "../apis/endpoints/songs";
import { IPeriod } from "../apis/endpoints/metrics/type";

export const Prefetchables: FC<PropsWithChildren> = ({ children }) => {
  metricsApi.useMetricsQuery();
  metricsApi.useRevenueQuery();
  songsApi.useHitsQuery(IPeriod.Monthly);
  songsApi.useTopArtistQuery();
  return children;
};
