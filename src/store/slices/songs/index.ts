import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";
import { recentsExtraReducers } from "./recents.reducers";
import { hitsExtraReducers } from "./hits.reducers";
import { topArtistExtraReducer } from "./topartist.reducers";
import { ITableControllerState } from "./type";

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
    setSortFilters: (
      state,
      action: PayloadAction<ITableControllerState["filters"]["sort"]>
    ) => {
      state.controllers.filters.sort = action.payload;
    },
    incrementPage: (state) => {
      state.controllers.page = state.controllers.page + 1;
    },
  },
  extraReducers(builder) {
    recentsExtraReducers(builder);
    hitsExtraReducers(builder);
    topArtistExtraReducer(builder);
  },
});

export const songsActions = songsSlice.actions;
