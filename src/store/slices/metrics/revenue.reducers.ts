import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { initialStateMetrics } from "./state";
import { metricsApi } from "../../apis/endpoints/metrics";

export const revenueExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMetrics>
) => {
  builder.addMatcher(metricsApi.endpoints.revenue.matchPending, (state) => {
    state.revenue.loading = true;
    state.revenue.error = "";
    state.revenue.data = initialStateMetrics.revenue.data;
  });
  builder.addMatcher(metricsApi.endpoints.revenue.matchRejected, (state) => {
    state.revenue.error = `Something wen't wrong!`;
    state.revenue.data = initialStateMetrics.revenue.data;
    state.revenue.loading = false;
  });
  builder.addMatcher(
    metricsApi.endpoints.revenue.matchFulfilled,
    (state, action) => {
      state.revenue.error = "";
      state.revenue.data = action.payload;
      state.revenue.loading = false;
    }
  );
};
