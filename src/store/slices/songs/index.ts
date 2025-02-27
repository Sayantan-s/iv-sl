import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";
import { recentsExtraReducers } from "./recents.reducers";
import { hitsExtraReducers } from "./hits.reducers";
import { topArtistExtraReducer } from "./topartist.reducers";
import { ITableControllerState } from "./type";
import { set } from "es-toolkit/compat";

export const songsSlice = createSlice({
  name: "musicInsights",
  initialState: initialStateMSongs,
  reducers: {
    setSearchFilters: (
      state,
      action: PayloadAction<ITableControllerState["filters"]["search"]>
    ) => {
      state.controllers.filters.search = action.payload;
    },

    updateFilters: (
      state,
      action: PayloadAction<{ key: string; value: unknown }>
    ) => {
      set(state.controllers.filters, action.payload.key, action.payload.value);
    },

    setSortFilters: (
      state,
      action: PayloadAction<ITableControllerState["filters"]["sort"]>
    ) => {
      state.controllers.filters.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.controllers.page = action.payload;
    },
  },
  extraReducers(builder) {
    recentsExtraReducers(builder);
    hitsExtraReducers(builder);
    topArtistExtraReducer(builder);
  },
});

export const songsActions = songsSlice.actions;
