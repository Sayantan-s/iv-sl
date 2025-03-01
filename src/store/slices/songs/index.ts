import { createSlice } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";
import { recentsExtraReducers } from "./recents.reducers";
import { hitsExtraReducers } from "./hits.reducers";
import { topArtistExtraReducer } from "./topartist.reducers";
import { filtersReducers } from "./filters.reducer";

export const songsSlice = createSlice({
  name: "musicInsights",
  initialState: initialStateMSongs,
  reducers: {
    ...filtersReducers(),
  },
  extraReducers(builder) {
    recentsExtraReducers(builder);
    hitsExtraReducers(builder);
    topArtistExtraReducer(builder);
  },
});

export const songsActions = songsSlice.actions;
