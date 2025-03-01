import { Card } from "@components/atoms/Card";
import { Skeleton } from "@components/utils/Skeleton";

export const Fallback = () => {
  return (
    <Card className="order-1 lg:order-0 bg-white flex md:flex-row flex-col items-center flex-[0.45] gap-8">
      <div className="xl:flex-[0.5] flex-[0.4] flex-shrink-1 md:text-left text-center md:mt-0 mt-20">
        <Skeleton className="w-full h-10" />
        <Skeleton className="md:mt-8 mt-4 h-20" />
        <Skeleton className="md:mt-8 mt-4 h-8" />
      </div>
      <div className="xl:flex-[0.5]! flex-[0.6] h-full flex items-center justify-center">
        <Skeleton className=" aspect-square h-9/12" circle />
      </div>
    </Card>
  );
};
