import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  artistsAdapter,
  initialStateMSongs,
  songsAdapter,
  usersAdapter,
} from "./state";
import { songsApi } from "../../apis/endpoints/songs";

export const recentsExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMSongs>
) => {
  builder.addMatcher(
    songsApi.endpoints.songs.matchFulfilled,
    (state, action) => {
      songsAdapter.addMany(
        state.songs,
        action.payload.map((state) => ({
          ...state,
          artist: state.artist.id,
          user: state.user.id,
        }))
      );
      state.songs.recents.ids = action.payload.map((recent) => recent.song.id);
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
