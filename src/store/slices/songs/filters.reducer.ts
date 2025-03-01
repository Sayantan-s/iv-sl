import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";
import { ITableControllerState, SongState } from "./type";
import { set } from "es-toolkit/compat";

export function filtersReducers() {
  return {
    setSearchFilters: (
      state: Draft<SongState>,
      action: PayloadAction<ITableControllerState["filters"]["search"]>
    ) => {
      state.controllers.filters.search = action.payload;
    },

    updateFilters: (
      state: Draft<SongState>,
      action: PayloadAction<{ key: string; value: unknown }>
    ) => {
      set(state.controllers.filters, action.payload.key, action.payload.value);
    },

    setSortFilters: (
      state: Draft<SongState>,
      action: PayloadAction<ITableControllerState["filters"]["sort"]>
    ) => {
      state.controllers.filters.sort = action.payload;
    },

    clearSearchFilters: (state: Draft<SongState>) => {
      state.controllers.filters.search =
        initialStateMSongs.controllers.filters.search;
    },

    setPage: (state: Draft<SongState>, action: PayloadAction<number>) => {
      state.controllers.page = action.payload;
    },
  };
}
