import { api } from "../..";
import { SONGS_HITS_OUTPUT, SONGS_RECENT_OUTPUT, SONGS_TOP_ARTIST } from "./op";
import { IRecentSongs, ISongInfo, ITopArtist, TOP_SONGS_INPUT } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
import { SONGS_API } from "./uri";
import { ITableControllerState } from "../../../slices/songs/type";
import { outputResolver } from "../../../utils/outputResolver";
import { fetchRecentSongs } from "../../../logic/fetchRecentSongs";
import { IPeriod } from "../metrics/type";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";

const hitsAdapter = createEntityAdapter<ISongInfo, string>({
  selectId: (data) => data.song.id,
});

export const songsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [SONGS_API.songs]: builder.query<IRecentSongs, ITableControllerState>({
      queryFn: async (config) => {
        const data = await apiResolver<IRecentSongs>(
          outputResolver(SONGS_RECENT_OUTPUT, fetchRecentSongs, config)
        );
        return { data };
      },
    }),

    [SONGS_API.hits]: builder.query<EntityState<ISongInfo, string>, IPeriod>({
      queryFn: async (value) => {
        const data = await apiResolver<ISongInfo[]>(SONGS_HITS_OUTPUT[value]);
        return {
          data: hitsAdapter.addMany(hitsAdapter.getInitialState(), data),
        };
      },
    }),

    [SONGS_API.topArtist]: builder.query<ITopArtist, void>({
      queryFn: async () => {
        const data = await apiResolver<ITopArtist>(SONGS_TOP_ARTIST);
        return { data };
      },
    }),
  }),
});
