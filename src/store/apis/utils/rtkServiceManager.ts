import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

interface IRTKServiceManager {
  uri: string;
  action: (
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
  ) => QueryDefinition<
    void,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    unknown,
    "api"
  >;
}

export const rtkApiManager =
  (endpointExecUtils: Array<IRTKServiceManager>) =>
  (
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
    endpointExecUtils.reduce((acc, curr) => {
      acc[curr.uri] = curr.action(builder);
      return acc;
    }, {} as Record<IRTKServiceManager["uri"], ReturnType<IRTKServiceManager["action"]>>);
