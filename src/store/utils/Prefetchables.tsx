import { FC, PropsWithChildren } from "react";
import { metricsApi } from "@store/apis/endpoints/metrics";
import { songsApi } from "@store/apis/endpoints/songs";

export const Prefetchables: FC<PropsWithChildren> = ({ children }) => {
  metricsApi.useMetricsQuery();
  metricsApi.useRevenueQuery();
  songsApi.useTopArtistQuery();
  return children;
};
