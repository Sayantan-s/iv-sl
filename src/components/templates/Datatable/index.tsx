import { FC, useCallback, useLayoutEffect, useRef, useState } from "react";
import { useGetLazyArtist } from "../../../store/hooks/useGetLazyArtist";
import { useGetLazUser } from "../../../store/hooks/useGetLazyUser";
import { useGetRecentSongs } from "../../../store/hooks/useGetRecentSongs";
import { formatDate } from "../../../utils/formatDate";
import { songsApi } from "../../../store/apis/endpoints/songs";
import { SearchFilters } from "./SearchFilters";
import { useGetControllers } from "../../../store/hooks/useGetFilters";
import { SortFilters } from "./SortFilters";
import { fill, map } from "es-toolkit/compat";
import clsx from "clsx";
import { List } from "../../utils/List";
import { useDispatch } from "../../../store";
import { songsActions } from "../../../store/slices/songs";
import { Skeleton } from "../../utils/Skeleton";
import { Pagination } from "../../utils/Pagination";

const TABLE_HEAD = [
  { label: "Songs/Artist", className: "flex-[0.4]" },
  { label: "User", className: "flex-[0.2]" },
  { label: "Date Streamed On", className: "flex-[0.3]" },
  { label: "Streams", className: "flex-[0.1]" },
];

// case 1 -> add filters
// table -> infinite scroll -> filters / sort

const totalPages = 10;

export const Datatable: FC = () => {
  const controls = useGetControllers();
  const dispatch = useDispatch();
  const [ref, paginationHeight] = useGetRefHeight();

  songsApi.useSongsQuery(controls);

  const { data, loading } = useGetRecentSongs();
  const getUser = useGetLazUser();
  const getArtist = useGetLazyArtist();

  const handlePageChange = (page: number) =>
    dispatch(songsActions.setPage(page));

  return (
    <div className="flex-[0.65] p-4 border border-gray-200 rounded-2xl">
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
        </div>
        <List
          isEmpty={!!!data.length}
          isEmptyFallback={<div>No more rows!</div>}
          className="h-[35rem] overflow-y-scroll mt-2 text-gray-700"
          data={data}
          isLoading={loading}
          loadingFallback={<TableFallback rows={10} />}
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
                <div className="flex gap-2 flex-[0.4] shrink-0">
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
                    <div className="text-gray-400 text-sm">
                      by {artist.name}
                    </div>
                  </div>
                </div>
                <div className="flex-[0.2] shrink-0">{user.name}</div>
                <p className="flex-[0.3] shrink-0">
                  {formatDate(lastStreamedOn)}
                </p>
                <h2 className="flex-[0.1] shrink-0">{streamCount}</h2>
              </div>
            );
          }}
        />
        <div
          className="absolute left-0 h-10 w-full bg-gradient-to-b from-white/0 via-white/50 to-white"
          style={{ bottom: paginationHeight }}
        />
        <Pagination
          currentPage={controls.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          maxVisiblePages={3}
          maxMovementAllowed={2}
          ref={ref}
        />
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

interface IProps {
  rows?: number;
}

const TableFallback: FC<IProps> = ({ rows = 5 }) => {
  return map(fill(Array(rows), true), (_, index) => (
    <TableRowFallback key={index} />
  ));
};

const TableRowFallback = () => {
  return (
    <div className="flex px-2 py-3 gap-2">
      <div className="flex gap-2 flex-[0.4]">
        <Skeleton
          className="w-8 h-8 relative overflow-hidden shrink-0"
          circle
        />
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="w-full flex-[0.2]" />
      <Skeleton className="flex-[0.3]" />
      <Skeleton className="flex-[0.1]" />
    </div>
  );
};

function useGetRefHeight(): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, []);

  return [ref, height];
}
