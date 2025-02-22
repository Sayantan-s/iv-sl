import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  artistsAdapter,
  initialStateMSongs,
  songsAdapter,
  usersAdapter,
} from "./state";
import { songsApi } from "../../apis/endpoints/songs";

export const hitsExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMSongs>
) => {
  builder.addMatcher(
    songsApi.endpoints.hits.matchFulfilled,
    (state, action) => {
      songsAdapter.addMany(
        state.songs,
        action.payload.map((state) => ({
          ...state,
          artist: state.artist.id,
          user: state.user.id,
        }))
      );
      state.songs.hits.ids = action.payload.map((hit) => hit.song.id);
      artistsAdapter.addMany(
        state.artists,
        action.payload.map((songInfo) => songInfo.artist)
      );
      usersAdapter.addMany(
        state.users,
        action.payload.map((songInfo) => songInfo.user)
      );
    }
  );
};
