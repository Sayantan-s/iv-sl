export interface ISongInfo {
  song: ISong;
  artist: IArtist;
  user: IUser;
  streamedDate: string;
  streamCount: number;
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
