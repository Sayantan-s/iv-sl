import { SONGS_HITS_OUTPUT } from "./op";

export interface ISongInfo {
  song: ISong;
  artist: IArtist;
  user: IUser;
  lastStreamedOn: string;
  streamCount: number;
  revenueSource: IRevenueSource;
}

export interface IRecentSongs {
  data: ISongInfo[];
  page: number;
  limit: number;
  next: boolean;
}

export type IRevenueSource = "subscriptions" | "ads";
export enum ERevenueSource {
  Subscriptions = "subscriptions",
  Ads = "ads",
}

export interface ISong {
  id: string;
  name: string;
  genre: string[];
  pic: string;
}

export interface IArtist {
  id: string;
  name: string;
  genre: string[];
  profilePic: string;
}

export interface IUser {
  id: string;
  name: string;
  profilePic: string;
}

export interface ITopArtist extends IArtist {
  totalStreams: number;
}

export type TOP_SONGS_INPUT = keyof typeof SONGS_HITS_OUTPUT;
