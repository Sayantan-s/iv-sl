import { ISongInfo } from "../../apis/endpoints/songs/type";

interface INewEntities {
  artist: string;
  user: string;
}

export type ISongStateInfo = Omit<ISongInfo, "artist" | "user"> & INewEntities;
