import { api } from "../..";
import { SONGS_HITS_OUTPUT, SONGS_RECENT_OUTPUT, SONGS_TOP_ARTIST } from "./op";
import { ISongInfo, ITopArtist, TOP_SONGS_INPUT } from "./type";
import { apiResolver } from "../../../utils/apiResolver";
import { SONGS_API } from "./uri";
import { Direction, ITableControllerState } from "../../../slices/songs/type";
import {
  filter,
  get,
  some,
  includes,
  toLower,
  orderBy,
  map,
  slice,
} from "es-toolkit/compat";
import { getTime, isValid, parseISO } from "date-fns";

interface SortConfig<T> {
  key: keyof T;
  direction: Direction;
}

const isDateString = (value: unknown): boolean => {
  if (typeof value !== "string") return false;
  return isValid(parseISO(value));
};

const sortData = <T>(data: T[], sortConfig: SortConfig<T>[]) => {
  return orderBy(
    data,
    sortConfig.map(({ key }) => (item) => {
      const value = item[key];
      return isDateString(value) ? getTime(parseISO(value as string)) : value;
    }),
    sortConfig.map(({ direction }) => (direction === "asc" ? "asc" : "desc"))
  );
};

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

        //:: sort query
        const sortQ = get(config, "filters.sort");
        if (sortQ.length) result = sortData(result, map(sortQ));

        //:: pagination
        const { page, limit } = config;
        const [start, end] = [(page - 1) * limit, page * limit];

        console.log(start, end, "PAGINATION");

        result = slice(result, start, end);
        const data = await apiResolver<ISongInfo[]>(result);
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
