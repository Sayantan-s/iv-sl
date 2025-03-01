import { api } from "../..";
import { METRIC_OUTPUT, REVENUE_OUTPUT, USER_GROWTH_OUTPUT } from "./op";
import {
  EUserGrowthPeriod,
  IPeriodBasedMetrics,
  IRevenue,
  IUserGrowthMetrics,
} from "./type";
import { apiResolver } from "@store/utils/apiResolver";
import { METRICS_API } from "./uri";

export const metricsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [METRICS_API.metrics]: builder.query<IPeriodBasedMetrics, void>({
      queryFn: async () => {
        const data = await apiResolver<IPeriodBasedMetrics>(METRIC_OUTPUT);
        return { data };
      },
    }),

    [METRICS_API.revenue]: builder.query<IRevenue, void>({
      queryFn: async () => {
        const data = await apiResolver<IRevenue>(REVENUE_OUTPUT);
        return { data };
      },
    }),

    [METRICS_API.growth]: builder.query<
      IUserGrowthMetrics[],
      EUserGrowthPeriod
    >({
      queryFn: async (periodGap) => {
        const OP = USER_GROWTH_OUTPUT[periodGap];
        if (!OP) throw new Error("No Growth output!");
        const data = await apiResolver<IUserGrowthMetrics[]>(OP);
        return { data };
      },
    }),
  }),
});
