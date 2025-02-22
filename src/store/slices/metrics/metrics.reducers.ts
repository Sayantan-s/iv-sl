import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { initialStateMetrics } from "./state";
import { metricsApi } from "../../apis/endpoints/metrics";

export const metricsExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMetrics>
) => {
  builder.addMatcher(metricsApi.endpoints.metrics.matchPending, (state) => {
    state.metrics.loading = true;
    state.metrics.error = "";
    state.metrics.data = initialStateMetrics.metrics.data;
  });
  builder.addMatcher(metricsApi.endpoints.metrics.matchRejected, (state) => {
    state.metrics.error = `Something wen't wrong!`;
    state.metrics.data = initialStateMetrics.metrics.data;
    state.metrics.loading = false;
  });
  builder.addMatcher(
    metricsApi.endpoints.metrics.matchFulfilled,
    (state, action) => {
      state.metrics.error = "";
      state.metrics.data = action.payload;
      state.metrics.loading = false;
    }
  );
};
