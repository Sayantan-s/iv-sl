import { api } from "..";
import { fetchMetrics } from "../controllers/metrics";
import { METRICS_API } from "../uris/metrics";
import { rtkApiManager } from "../utils/rtkServiceManager";

const ENDPOINTS = [
  {
    uri: METRICS_API.metrics,
    action: fetchMetrics,
  },
];

export const metricsApi = api.injectEndpoints({
  endpoints: rtkApiManager(ENDPOINTS),
});
