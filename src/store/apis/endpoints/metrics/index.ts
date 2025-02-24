import { api } from "../..";
import { METRIC_OUTPUT, REVENUE_OUTPUT, USER_GROW_OUTPUT } from "./op";
import { IPeriodBasedMetrics, IRevenue, IUserGrowth } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
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

    [METRICS_API.growth]: builder.query<IUserGrowth, number>({
      queryFn: async (year: number) => {
        const OP = USER_GROW_OUTPUT.find((doc) => doc.year === year);
        if (!OP) throw new Error("No Year Found!");
        const data = await apiResolver<IUserGrowth>(OP);
        return { data };
      },
    }),
  }),
});
