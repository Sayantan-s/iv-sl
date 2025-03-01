import { Card } from "@components/atoms/Card";
import { useGetTopArtist } from "@store/hooks/useGetTopArtist";
import { formatToK } from "@utils/formatToK";
import { map, snakeCase } from "es-toolkit/compat";
import { TopArtistFallback } from "./TopArtistFallback";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const TopArtistCard = () => {
  const { data: topArtist, loading } = useGetTopArtist();

  if (loading) return <TopArtistFallback />;

  return (
    <Card className="bg-orange-500 border-orange-200! xs:aspect-auto aspect-square flex flex-col justify-between">
      <div className="flex xs:flex-row flex-col items-start xs:gap-2 gap-1">
        <div className="xs:w-14 xs:h-14 w-10 h-10 relative rounded-full overflow-hidden">
          <LazyLoadImage
            effect="blur"
            src={topArtist.profilePic}
            alt={`${snakeCase(topArtist.name)}_pic`}
            className="h-full w-full object-cover"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-orange-500/30"></div>
        </div>
        <div>
          <h4 className="text-base text-orange-100">{topArtist.name}</h4>
          <div className="text-[0.6rem] flex flex-wrap gap-1 text-orange-300 mt-1 sm:min-w-[10rem] overflow-x-scroll">
            {map(topArtist.genre, (genre) => (
              <button
                tabIndex={-1}
                key={genre}
                className="xs:px-2 px-1 py-0.5 border border-orange-300 rounded-full"
              >
                # {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <p className="sm:text-3xl text-xl text-orange-100 mt-0.5 font-normal">
          {formatToK(topArtist.streamCount)}{" "}
          <span className="text-orange-300 text-sm">streams</span>
        </p>
      </div>
    </Card>
  );
};
