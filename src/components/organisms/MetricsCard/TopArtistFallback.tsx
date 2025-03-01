import { Card } from "@components/atoms/Card";
import { Skeleton } from "@components/utils/Skeleton";

export const TopArtistFallback = () => {
  return (
    <Card className="bg-orange-500! flex flex-col justify-between xs:aspect-auto aspect-square">
      <div className="flex gap-2">
        <Skeleton className="w-14 h-14 shrink-0 bg-orange-300" circle />
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-full h-4 bg-orange-300" />
          <Skeleton className="w-1/2 h-4 bg-orange-300" />
        </div>
      </div>
      <div className="mt-4">
        <Skeleton className="h-8 w-2/3 mt-4 bg-orange-300" />
      </div>
    </Card>
  );
};
