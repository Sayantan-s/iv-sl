import { useSelector } from "..";

export const useGetTopArtist = () =>
  useSelector((state) => ({
    ...state.musicInsights.artists.topArtist,
    data: {
      ...state.musicInsights.artists.entities[
        state.musicInsights.artists.topArtist.data.id
      ],
      ...state.musicInsights.artists.topArtist.data,
    },
  }));
