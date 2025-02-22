import { useSelector } from "..";

export const useGetRecentSongs = useSelector((state) => ({
  ...state.musicInsights.songs.recents,
  data: state.musicInsights.songs.recents.ids.map(
    (recentSongId) => state.musicInsights.songs.entities[recentSongId]
  ),
}));
