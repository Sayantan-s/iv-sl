import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

type TBuilder = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >,
  never,
  "api"
>;

type TServiceMangerReturnType<TResponse, TArgs> = QueryDefinition<
  TArgs,
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  >,
  never,
  TResponse,
  "api"
>;

interface IRTKServiceManager<TResponse, TArgs> {
  uri: string;
  action: (builder: TBuilder) => TServiceMangerReturnType<TResponse, TArgs>;
}

export const rtkApiManager =
  <TResponse, TArgs>(
    endpointExecUtils: Array<IRTKServiceManager<TResponse, TArgs>>
  ) =>
  (builder: TBuilder) =>
    endpointExecUtils.reduce((acc, curr) => {
      acc[curr.uri] = curr.action(builder);
      return acc;
    }, {} as Record<IRTKServiceManager<TResponse, TArgs>["uri"], TServiceMangerReturnType<TResponse, TArgs>>);
