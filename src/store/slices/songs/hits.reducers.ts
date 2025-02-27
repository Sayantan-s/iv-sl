import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  artistsAdapter,
  initialStateMSongs,
  songsAdapter,
  usersAdapter,
} from "./state";
import { songsApi } from "../../apis/endpoints/songs";
import { map } from "es-toolkit/compat";

export const hitsExtraReducers = (
  builder: ActionReducerMapBuilder<typeof initialStateMSongs>
) => {
  builder.addMatcher(
    songsApi.endpoints.hits.matchFulfilled,
    (state, action) => {
      const docs = action.payload.entities;
      const docIds = action.payload.ids;
      songsAdapter.addMany(
        state.songs,
        map(docIds, (docId) => ({
          ...docs[docId],
          artist: docs[docId].artist.id,
          user: docs[docId].user.id,
        }))
      );
      state.songs.hits.ids = map(docIds, (docId) => docs[docId].song.id);
      artistsAdapter.addMany(
        state.artists,
        map(docIds, (docId) => docs[docId].artist)
      );
      usersAdapter.addMany(
        state.users,
        map(docIds, (docId) => docs[docId].user)
      );
    }
  );
};
