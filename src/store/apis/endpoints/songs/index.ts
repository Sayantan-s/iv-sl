import { api } from "../..";
import { SONGS_HITS_OUTPUT, SONGS_RECENT_OUTPUT, SONGS_TOP_ARTIST } from "./op";
import { ISongInfo, ITopArtist, TOP_SONGS_INPUT } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
import { SONGS_API } from "./uri";
import { ITableControllerState } from "../../../slices/songs/type";
import { filter, get, some, includes, toLower } from "es-toolkit/compat";

export const songsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [SONGS_API.songs]: builder.query<ISongInfo[], ITableControllerState>({
      queryFn: async (config) => {
        let result = SONGS_RECENT_OUTPUT;

        // :: filters query
        const revenueType = get(config, "filters.search.revenueType");
        const searchBy = get(config, "filters.search.by");
        const searchValue = get(config, "filters.search.value");
        if (revenueType)
          result = filter(result, (song) => song.revenueSource !== revenueType);
        if (searchBy.length && searchValue)
          result = filter(result, (doc) =>
            some([doc.artist.name, doc.song.name], (name) =>
              includes(toLower(name), toLower(searchValue))
            )
          );

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
