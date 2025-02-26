import { FC, useCallback } from "react";
import { useGetLazyArtist } from "../../../store/hooks/useGetLazyArtist";
import { useGetLazUser } from "../../../store/hooks/useGetLazyUser";
import { useGetRecentSongs } from "../../../store/hooks/useGetRecentSongs";
import { formatDate } from "../../../utils/formatDate";
import { songsApi } from "../../../store/apis/endpoints/songs";
import { SearchFilters } from "./SearchFilters";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { SortFilters } from "./SortFilters";
import { map } from "es-toolkit/compat";
import clsx from "clsx";
import { InfiniteScroll } from "../../utils/InfiniteScroll";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";

const TABLE_HEAD = [
  { label: "Songs/Artist", className: "flex-[0.4]" },
  { label: "User", className: "flex-[0.2]" },
  { label: "Date Streamed On", className: "flex-[0.3]" },
  { label: "Streams", className: "flex-[0.1]" },
];

export const Datatable: FC = () => {
  const controls = useGetControllers();
  const dispatch = useDispatch();

  songsApi.useSongsQuery(controls);

  const { data, loading } = useGetRecentSongs();
  const getUser = useGetLazUser();
  const getArtist = useGetLazyArtist();

  const handleFetchMore = useCallback(
    () => dispatch(songsActions.incrementPage()),
    []
  );

  return (
    <div className="flex-[0.6] p-4 border border-gray-200 rounded-2xl">
      <TableHeader />
      <div className="mt-1 relative">
        <div className="flex px-2 py-1">
          {map(TABLE_HEAD, ({ label, className }) => (
            <div
              key={label}
              className={clsx(className, "text-sm gap-2 text-gray-400")}
            >
              {label}
            </div>
          ))}
          <div className="w-full h-10 transform translate-y-1/2 absolute left-0 bg-gradient-to-b from-white via-white/90 to-white/0 z-10" />
          <div className="w-full h-10 absolute bottom-0 bg-gradient-to-b from-white/0 via-white/50 to-white z-100 left-0" />
        </div>
        <div className="max-h-[40rem] overflow-y-scroll mt-2 text-gray-700">
          <InfiniteScroll
            data={data}
            isLoading={loading}
            fallback={<div>loading...</div>}
            hasMore={!!data.length}
            fetchMore={handleFetchMore}
            renderItem={({
              song,
              lastStreamedOn,
              streamCount,
              user: userId,
              artist: artistId,
            }) => {
              const user = getUser(userId);
              const artist = getArtist(artistId);
              return (
                <div key={song.id} className="flex px-2 py-3 gap-2">
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
            }}
          />
        </div>
      </div>
    </div>
  );
};

const TableHeader = () => {
  return (
    <div className="flex justify-between px-2">
      <h1>Recently Streamed Songs</h1>
      <div className="flex items-center gap-2">
        <SortFilters />
        <SearchFilters />
      </div>
    </div>
  );
};
