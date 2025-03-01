import { Card } from "@components/atoms/Card";
import { EUserGrowthPeriod } from "@store/apis/endpoints/metrics/type";
import { useState } from "react";
import { ToggleGroup } from "@components/utils/ToggleGroup";
import { map } from "es-toolkit/compat";
import { UserGrowthChart } from "@components/organisms/UserGrowth/chart";

const USERGROWTH_PERIOD = [
  EUserGrowthPeriod.THREE_MO,
  EUserGrowthPeriod.SIX_MO,
  EUserGrowthPeriod.ONE_Y,
];

export const Usergrowth = () => {
  const [userGrowthPeriodIndex, setUserGrowthPeriodIndex] = useState(2);

  return (
    <Card className="flex-1 flex flex-col lg:aspect-auto aspect-square">
      <div className="flex justify-between h-max flex-[0.2]">
        <div>
          <h2 className="text-gray-700 text-base">User Growth Overview</h2>
          <p className="text-gray-400 text-xs">
            Insights into your platform's growth
          </p>
        </div>
        <ToggleGroup
          selectedItemIndex={userGrowthPeriodIndex}
          onSelect={setUserGrowthPeriodIndex}
          className="space-x-2"
        >
          {map(USERGROWTH_PERIOD, (period) => (
            <button
              key={period}
              className="text-xs cursor-pointer aria-[selected=true]:bg-orange-100 aria-[selected=true]:text-orange-400 aspect-square w-8 rounded-md text-gray-400"
            >
              {period}
            </button>
          ))}
        </ToggleGroup>
      </div>
      <UserGrowthChart period={USERGROWTH_PERIOD[userGrowthPeriodIndex]} />
    </Card>
  );
};
