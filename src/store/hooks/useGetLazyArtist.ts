import { useSelector } from "..";

export const useGetLazyArtist = () => {
  const artists = useSelector((state) => state.musicInsights.artists.entities);
  return (artistId: string) => artists[artistId];
};
