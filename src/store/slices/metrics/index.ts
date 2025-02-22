import { createSlice } from "@reduxjs/toolkit";
import { initialStateMetrics } from "./state";
import { metricsExtraReducers } from "./metrics.reducers";
import { revenueExtraReducers } from "./revenue.reducers";

export const metricsSlice = createSlice({
  name: "metrics",
  initialState: initialStateMetrics,
  reducers: {},
  extraReducers(builder) {
    metricsExtraReducers(builder);
    revenueExtraReducers(builder);
  },
});

export const metricsActions = metricsSlice.actions;
