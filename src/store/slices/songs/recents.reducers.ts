import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  artistsAdapter,
  initialStateMSongs,
  songsAdapter,
  usersAdapter,
} from "./state";
import { songsApi } from "../../apis/endpoints/songs";
import { map } from "es-toolkit/compat";

export const recentsExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMSongs>
) => {
  builder.addMatcher(songsApi.endpoints.songs.matchPending, (state) => {
    state.songs.recents.loading = true;
    state.songs.recents.error = "";
  });

  builder.addMatcher(songsApi.endpoints.hits.matchPending, (state) => {
    state.songs.hits.loading = true;
    state.songs.hits.error = "";
  });

  builder.addMatcher(songsApi.endpoints.songs.matchRejected, (state) => {
    state.songs.recents.loading = false;
    state.songs.recents.error = "Something wen't wrong";
    state.controllers.next = false;
  });

  builder.addMatcher(songsApi.endpoints.hits.matchRejected, (state) => {
    state.songs.hits.loading = false;
    state.songs.hits.error = "Something wen't wrong";
    state.controllers.next = false;
  });

  builder.addMatcher(
    songsApi.endpoints.songs.matchFulfilled,
    (state, action) => {
      state.controllers.next = !!action.payload.data.length;
      state.songs.recents.ids = map(
        action.payload.data,
        (recent) => recent.song.id
      );
      songsAdapter.addMany(
        state.songs,
        map(action.payload.data, (state) => ({
          ...state,
          artist: state.artist.id,
          user: state.user.id,
        }))
      );
      artistsAdapter.addMany(
        state.artists,
        map(action.payload.data, (songInfo) => songInfo.artist)
      );
      usersAdapter.addMany(
        state.users,
        map(action.payload.data, (songInfo) => songInfo.user)
      );
      state.songs.recents.loading = false;
      state.songs.recents.error = "";
    }
  );
};
