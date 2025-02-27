import { IRecentSongs, ISongInfo } from "../apis/endpoints/songs/type";
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
import { Direction, ITableControllerState } from "../slices/songs/type";

interface SortConfig<T> {
  key: keyof T;
  direction: Direction;
}

const isDateString = (value: unknown): boolean => {
  if (typeof value !== "string") return false;
  return isValid(parseISO(value));
};

const sortData = <T,>(data: T[], sortConfig: SortConfig<T>[]) => {
  return orderBy(
    data,
    map(sortConfig, ({ key }) => (item) => {
      const value = item[key];
      return isDateString(value) ? getTime(parseISO(value as string)) : value;
    }),
    map(sortConfig, ({ direction }) => direction)
  );
};

export function fetchRecentSongs(
  db: ISongInfo[],
  config: ITableControllerState
): IRecentSongs {
  let result = db;

  // :: filters query
  const revenueType = get(config, "filters.search.revenueType");
  const searchBy = get(config, "filters.search.by");
  const searchValue = get(config, "filters.search.value");
  if (revenueType)
    result = filter(result, (song) => song.revenueSource !== revenueType);
  if (searchBy.length && searchValue)
    // :: Logic based on
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

  result = slice(result, start, end);
  const nextPage = slice(result, end, end + limit);

  return { data: result, limit, page, next: !!nextPage.length };
}
