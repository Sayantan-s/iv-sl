import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { artistsAdapter, initialStateMSongs } from "./state";
import { songsApi } from "../../apis/endpoints/songs";

export const topArtistExtraReducer = (
  builder: ActionReducerMapBuilder<typeof initialStateMSongs>
) => {
  builder.addMatcher(
    songsApi.endpoints.topArtist.matchFulfilled,
    (state, action) => {
      artistsAdapter.addOne(state.artists, action.payload);
      state.artists.topArtist.data.id = action.payload.id;
      state.artists.topArtist.data.streamCount = action.payload.totalStreams;
      state.artists.topArtist.loading = false;
      state.artists.topArtist.error = "";
    }
  );

  builder.addMatcher(songsApi.endpoints.topArtist.matchPending, (state) => {
    state.artists.topArtist.loading = true;
    state.artists.topArtist.error = "";
  });

  builder.addMatcher(songsApi.endpoints.topArtist.matchPending, (state) => {
    state.artists.topArtist.loading = true;
    state.artists.topArtist.error = "Something wen't wrong!";
  });
};
