import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  artistsAdapter,
  initialStateMSongs,
  songsAdapter,
  usersAdapter,
} from "@store/slices/songs/state";
import { songsApi } from "@store/apis/endpoints/songs";
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
      state.controllers.next = !!action.payload.ids.length;
      const docIds = action.payload.ids;
      const docs = action.payload.entities;
      state.songs.recents.ids = map(docIds, (docId) => docs[docId].song.id);

      songsAdapter.addMany(
        state.songs,
        map(docIds, (docId) => ({
          ...docs[docId],
          artist: docs[docId].artist.id,
          user: docs[docId].user.id,
        }))
      );
      artistsAdapter.addMany(
        state.artists,
        map(docIds, (docId) => docs[docId].artist)
      );

      usersAdapter.addMany(
        state.users,
        map(docIds, (docId) => docs[docId].user)
      );

      state.songs.recents.loading = false;
      state.songs.recents.error = "";
    }
  );
};
