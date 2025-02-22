import { createSlice } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";
import { recentsExtraReducers } from "./recents.reducers";
import { hitsExtraReducers } from "./hits.reducers";

export const songsSlice = createSlice({
  name: "musicInsights",
  initialState: initialStateMSongs,
  reducers: {},
  extraReducers(builder) {
    recentsExtraReducers(builder);
    hitsExtraReducers(builder);
  },
});

export const songsActions = songsSlice.actions;
