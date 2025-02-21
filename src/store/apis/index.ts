import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.PUBLIC_API_URL,
});

export const api = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
