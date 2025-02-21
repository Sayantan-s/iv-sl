import { METRICS_API } from "../../uris/metrics";
import { TController } from "../type";
import { IMetrics } from "./type";

export const fetchMetrics = (builder: TController) =>
  builder.query<IMetrics, void>({
    query: () => ({ url: METRICS_API.metrics }),
  });
