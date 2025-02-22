import { configureStore } from "@reduxjs/toolkit";
import * as rr from "react-redux";
import { api } from "./apis";
import { metricsSlice } from "./slices/metrics";
import { songsSlice } from "./slices/songs";

const middlewares = [api.middleware];
metricsSlice;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [metricsSlice.reducerPath]: metricsSlice.reducer,
    [songsSlice.reducerPath]: songsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = rr.useDispatch;
export const useSelector: rr.TypedUseSelectorHook<RootState> = rr.useSelector;
