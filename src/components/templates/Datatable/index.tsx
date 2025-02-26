import { FC } from "react";
import { useGetLazyArtist } from "../../../store/hooks/useGetLazyArtist";
import { useGetLazUser } from "../../../store/hooks/useGetLazyUser";
import { useGetRecentSongs } from "../../../store/hooks/useGetRecentSongs";
import { formatDate } from "../../../utils/formatDate";
import { songsApi } from "../../../store/apis/endpoints/songs";
import { SearchFilters } from "./SearchFilters";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { SortFilters } from "./SortFilters";

export const Datatable: FC = () => {
  const controls = useGetControllers();

  songsApi.useSongsQuery(controls);

  const { data } = useGetRecentSongs();
  const getUser = useGetLazUser();
  const getArtist = useGetLazyArtist();

  // Sort of last streamed date OR stream count
  // filter by artist AND song | artist OR song
  // filter by revenue source

  return (
    <div className="flex-[0.5]">
      <div className="flex justify-between">
        <h1>Recently Streamed Songs</h1>
        <SortFilters />
        <SearchFilters />
      </div>
      <div>
        {data.map(
          ({
            song,
            lastStreamedOn,
            streamCount,
            user: userId,
            artist: artistId,
          }) => {
            const user = getUser(userId);
            const artist = getArtist(artistId);
            return (
              <div key={song.id} className="flex px-2 py-3">
                <div className="flex gap-2 flex-[0.4]">
                  <div className="w-8 h-8 rounded-full relative overflow-hidden">
                    <img
                      src={
                        "https://i.pinimg.com/1200x/fe/d7/9a/fed79a5e7fcb0aceb8d17059e7bd5f4c.jpg"
                      }
                      alt={`${song.id}_${song.name}`}
                      className="absolute top-0 left-0 object-cover"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
                  </div>
                  <div>
                    <h1 className="text-gray-700 font-medium">{song.name}</h1>
                    <p className="text-gray-400 text-sm">by {artist.name}</p>
                  </div>
                </div>
                <div className="flex-[0.2]">{user.name}</div>
                <p className="flex-[0.3]">{formatDate(lastStreamedOn)}</p>
                <h2 className="flex-[0.1]">{streamCount}</h2>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
