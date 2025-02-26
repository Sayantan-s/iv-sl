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
      if (!action.payload.length) return;
      state.songs.recents.ids.push(
        ...action.payload.map((recent) => recent.song.id)
      );
      songsAdapter.setMany(
        state.songs,
        action.payload.map((state) => ({
          ...state,
          artist: state.artist.id,
          user: state.user.id,
        }))
      );
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
