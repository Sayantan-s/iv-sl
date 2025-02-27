import { ERevenueSource, ISongInfo } from "../../apis/endpoints/songs/type";

interface INewEntities {
  artist: string;
  user: string;
}

export type ISongStateInfo = Omit<ISongInfo, "artist" | "user"> & INewEntities;

export enum ISearchBy {
  ARTIST = "artist",
  SONG = "song",
}

export enum SortBy {
  STREAM_COUNT = "streamCount",
  LAST_STREAMED_ON = "lastStreamedOn",
}

export enum Direction {
  ASC = "asc",
  DSC = "dsc",
}

export enum ISortByItemKey {
  LastStreamedOn = "lastStreamedOn",
  StreamCount = "streamCount",
}
export interface ISortByItem {
  direction: Direction;
  key: ISortByItemKey;
}

export interface ITableControllerState {
  page: number;
  limit: number;
  next: boolean; // Best practice to use nextCursor
  filters: {
    search: {
      value: string;
      by: ISearchBy[];
      revenueType: ERevenueSource | null;
    };
    sort: ISortByItem[];
  };
}

export interface IGetKV<K> {
  key: keyof K;
  value: K[keyof K];
}
