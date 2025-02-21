import { configureStore } from "@reduxjs/toolkit";
import * as rr from "react-redux";
import { api } from "./apis";

const middlewares = [api.middleware];

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = rr.useDispatch;
export const useSelector: rr.TypedUseSelectorHook<RootState> = rr.useSelector;
