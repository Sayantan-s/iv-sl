import { FC } from "react";
import { formatDate } from "@utils/formatDate";
import { songsApi } from "@store/apis/endpoints/songs";
import { SearchFilters } from "@components/organisms/Datatable/SearchFilters";
import { useGetControllers } from "@store/hooks/useGetFilters";
import { SortFilters } from "@components/organisms/Datatable/SortFilters";
import { map } from "es-toolkit/compat";
// import { Table } from "@components/utils/List";
import { useDispatch } from "@store";
import { songsActions } from "@store/slices/songs";
import { Pagination } from "@components/utils/Pagination";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { useGetRefHeight } from "@hooks/useGetRefHeight";
import { TableFallback } from "@components/organisms/Datatable/TableFallback";
import { Card } from "@components/atoms/Card";
import { Table } from "@components/utils/Table";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TOTAL_PAGES = 10;
const MAX_VISIBLE_PAGES = 3;
const MAX_MOVEMENT_ALLOWED = 2;

const TABLE_HEAD = [
  {
    label: "Songs/Artist",
    className: "flex-[0.4] lg:min-w-auto min-w-[25rem]",
  },
  { label: "User", className: "flex-[0.25] lg:min-w-auto min-w-[15rem]" },
  {
    label: "Date Streamed On",
    className: "flex-[0.25] lg:min-w-auto min-w-[10rem]",
  },
  { label: "Streams", className: "flex-[0.1] lg:min-w-auto" },
];

export const Datatable: FC = () => {
  const controls = useGetControllers();
  const dispatch = useDispatch();
  const [ref, paginationHeight] = useGetRefHeight();

  const { data, isFetching } = songsApi.useSongsQuery(controls);

  const songIds = data?.ids;

  const tableData = map(songIds!, (songId) => data!.entities[songId]);

  const handlePageChange = (page: number) =>
    dispatch(songsActions.setPage(page));

  return (
    <Card className="xl:flex-[0.65] flex-[0.6] text-gray-700" id="table">
      <TableHeader />
      <div className="mt-2 relative overflow-x-scroll">
        <Table className="mt-4 no-scrollbar!">
          <Table.Header>
            <Table.Row className="flex px-4 bg-gray-50 rounded-md">
              {map(TABLE_HEAD, (th) => (
                <Table.Head
                  key={th.label}
                  className={clsx(
                    th.className,
                    "text-sm gap-2 text-gray-400 flex items-center"
                  )}
                >
                  {th.label}
                </Table.Head>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body className="h-[40rem]">
            {isFetching ? (
              <TableFallback rows={10} />
            ) : (
              map(
                tableData,
                ({ song, lastStreamedOn, streamCount, user, artist }) => {
                  return (
                    <Table.Row
                      key={song.id}
                      className="flex px-4 w-full py-3 gap-2 group rounded-md hover:bg-orange-50 focus-within:bg-orange-100 outline-none text-gray-700"
                    >
                      <Table.Cell className="flex gap-4 flex-[0.4] shrink-0 lg:min-w-auto min-w-[25rem]">
                        <div className="w-10 h-10 rounded-full relative overflow-hidden">
                          <LazyLoadImage
                            effect="blur"
                            src={song.pic}
                            alt={`${song.id}_${song.name}`}
                            className="object-cover w-full h-full"
                          />
                          <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
                        </div>
                        <div>
                          <h1 className="text-gray-700 font-medium">
                            {song.name}
                          </h1>
                          <div className="text-gray-400 md:text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[130px]">
                            by {artist.name}
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="flex-[0.25] shrink-1 lg:min-w-auto min-w-[15rem]">
                        {user.name}
                      </Table.Cell>
                      <Table.Cell className="flex-[0.25] shrink-0 lg:min-w-auto min-w-[10rem]">
                        {formatDate(lastStreamedOn)}
                      </Table.Cell>
                      <Table.Cell className="flex-[0.1] shrink-1 lg:min-w-auto">
                        {streamCount}
                      </Table.Cell>
                    </Table.Row>
                  );
                }
              )
            )}
          </Table.Body>
          <Table.Footer>
            <div
              className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-white/0 via-white/50 to-white"
              style={{ bottom: paginationHeight + 16 }}
            />
          </Table.Footer>
        </Table>
        <Pagination
          className="w-max mt-4 relative transform  lg:left-full lg:-translate-x-full left-1/2 -translate-x-1/2"
          currentPage={controls.page}
          totalPages={TOTAL_PAGES}
          onPageChange={handlePageChange}
          maxVisiblePages={MAX_VISIBLE_PAGES}
          maxMovementAllowed={MAX_MOVEMENT_ALLOWED}
          ref={ref}
        />
      </div>
    </Card>
  );
};

const TableHeader = () => {
  return (
    <div className="flex justify-between px-2 text-gray-700">
      <div className="flex items-start gap-2">
        <div className="aspect-square w-10 flex items-center justify-center border border-gray-200 rounded-md">
          <ArrowTrendingUpIcon className="size-5 text-gray-700" />
        </div>
        <div>
          <h1>Recently Streamed Songs</h1>
          <p className="text-xs text-gray-400">Streamed plays at a glance</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <SortFilters />
        <SearchFilters />
      </div>
    </div>
  );
};
