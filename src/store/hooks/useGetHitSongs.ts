import { useSelector } from "..";

export const useGetHitSongs = useSelector((state) =>
  state.musicInsights.songs.hits.ids.map(
    (hitSongId) => state.musicInsights.songs.entities[hitSongId]
  )
);
