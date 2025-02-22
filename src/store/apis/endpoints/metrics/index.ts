import { api } from "../..";
import { METRIC_OUTPUT, REVENUE_OUTPUT } from "./op";
import { IMetrics, IRevenue } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
import { METRICS_API } from "./uri";

export const metricsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [METRICS_API.metrics]: builder.query<IMetrics, void>({
      queryFn: async () => {
        const data = await apiResolver<IMetrics>(METRIC_OUTPUT);
        return { data };
      },
    }),

    [METRICS_API.revenue]: builder.query<IRevenue, void>({
      queryFn: async () => {
        const data = await apiResolver<IRevenue>(REVENUE_OUTPUT);
        return { data };
      },
    }),
  }),
});
