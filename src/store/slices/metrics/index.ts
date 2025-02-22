import { createSlice } from "@reduxjs/toolkit";
import { initialStateMetrics } from "./state";

export const metricsSlice = createSlice({
  name: "metrics",
  initialState: initialStateMetrics,
  reducers: {},
  extraReducers(builder) {},
});

export const metricsActions = metricsSlice.actions;
