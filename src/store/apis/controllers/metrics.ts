import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { METRICS_API } from "../uris/metrics";

export const fetchMetrics = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    "api"
  >
) =>
  builder.query<unknown, void>({
    query: () => ({ url: METRICS_API.metrics }),
  });
