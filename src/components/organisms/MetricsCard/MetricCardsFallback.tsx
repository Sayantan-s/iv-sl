import { Card } from "@components/atoms/Card";
import { Skeleton } from "@components/utils/Skeleton";
import { fill, map } from "es-toolkit/compat";

export const MetricCardsFallback = () => {
  return map(fill(Array(3), true), (_, index) => (
    <Card
      className="bg-white flex flex-col justify-between xs:aspect-auto aspect-square"
      key={index}
    >
      <Skeleton className="h-5 w-1/3" />
      <div className="mt-4">
        <div className="flex gap-2">
          <Skeleton className="w-10 h-10 shrink-0" circle />
          <Skeleton className="w-full" />
        </div>
        <Skeleton className="h-4 w-1/3 mt-4" />
      </div>
    </Card>
  ));
};
