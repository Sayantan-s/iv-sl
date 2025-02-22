import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { initialStateMSongs } from "./state";

const initialState = createEntityAdapter();

export const songsSlice = createSlice({
  name: "songs",
  initialState: initialState.getInitialState(initialStateMSongs),
  reducers: {},
  extraReducers(builder) {},
});

export const songsActions = songsSlice.actions;
