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

export interface ITableControllerState {
  page: number;
  limit: number;
  filters: {
    search: {
      value: string;
      by: ISearchBy[];
      revenueType: ERevenueSource[];
    };
    sort: {
      by: SortBy | null;
      direction: Direction | null;
    };
  };
}
