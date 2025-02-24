import { api } from "../..";
import { SONGS_HITS_OUTPUT, SONGS_RECENT_OUTPUT, SONGS_TOP_ARTIST } from "./op";
import { ISongInfo, ITopArtist, TOP_SONGS_INPUT } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
import { SONGS_API } from "./uri";

export const songsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [SONGS_API.songs]: builder.query<ISongInfo[], void>({
      queryFn: async () => {
        const data = await apiResolver<ISongInfo[]>(SONGS_RECENT_OUTPUT);
        return { data };
      },
    }),

    [SONGS_API.hits]: builder.query<ISongInfo[], TOP_SONGS_INPUT>({
      queryFn: async (value) => {
        const data = await apiResolver<ISongInfo[]>(SONGS_HITS_OUTPUT[value]);
        return { data };
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
