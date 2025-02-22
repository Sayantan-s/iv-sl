import { createEntityAdapter } from "@reduxjs/toolkit";
import { initialStateCreator } from "../../utils/stateCreator";
import { ISongInfo } from "../../apis/endpoints/songs/type";
import { ISongStateInfo } from "./type";

const RECENT_SONG_INITIAL_STATE: string[] = [];
const HIT_SONG_INITIAL_STATE: string[] = [];

export const artistsAdapter = createEntityAdapter({
  selectId: (artist: ISongInfo["artist"]) => artist.id,
});

export const usersAdapter = createEntityAdapter({
  selectId: (user: ISongInfo["user"]) => user.id,
});

export const songsAdapter = createEntityAdapter({
  selectId: ({ song }: ISongStateInfo) => song.id,
});

export const initialStateMSongs = {
  artists: artistsAdapter.getInitialState(),
  users: usersAdapter.getInitialState(),
  songs: songsAdapter.getInitialState({
    recents: initialStateCreator("ids", RECENT_SONG_INITIAL_STATE),
    hits: initialStateCreator("ids", HIT_SONG_INITIAL_STATE),
  }),
};
