import { api } from "../..";
import { SONGS_HITS_OUTPUT, SONGS_RECENT_OUTPUT } from "./op";
import { ISongInfo } from "./type";
import { apiResolver } from "../../../utils/apiResolver";

export const songsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [SONGS_API.songs]: builder.query<ISongInfo[], void>({
      queryFn: async () => {
        const data = await apiResolver<ISongInfo[]>(SONGS_RECENT_OUTPUT);
        return { data };
      },
    }),

    [SONGS_API.hits]: builder.query<ISongInfo[], void>({
      queryFn: async () => {
        const data = await apiResolver<ISongInfo[]>(SONGS_HITS_OUTPUT);
        return { data };
      },
    }),
  }),
});
