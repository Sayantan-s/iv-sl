import { useState } from "react";
import { Card } from "@components/atoms/Card";
import { IPeriod } from "@store/apis/endpoints/metrics/type";
import { ToggleGroup } from "@components/utils/ToggleGroup";
import { StreamSongsChart } from "@components/organisms/MostStreamSongs/chart";

const PERIODS = [
  { value: IPeriod.Monthly, label: "Monthly" },
  { value: IPeriod.Yearly, label: "Yearly" },
];

export const MostStreamedSongs = () => {
  const [periodIndex, setPeriodIndex] = useState(0);

  const handleSetIndex = (index: number) => () => setPeriodIndex(index);

  return (
    <Card className="flex-1 flex flex-col lg:aspect-auto aspect-square">
      <div className="flex justify-between items-start flex-[0.2]">
        <div>
          <h2 className="text-gray-700 text-base">
            Top 5 {periodIndex ? "Monthly" : "Yearly"} Hits
          </h2>
          <p className="text-gray-400 text-xs">
            Stats of top five hits over period
          </p>
        </div>
        <ToggleGroup
          selectedItemIndex={periodIndex}
          onSelect={setPeriodIndex}
          className="flex items-start p-1 border rounded-full relative bg-gray-100 border-gray-200"
        >
          {PERIODS.map((period, index) => (
            <button
              key={period.label}
              onClick={handleSetIndex(index)}
              className="text-xs z-10 cursor-pointer aria-[selected=true]:bg-white bg-transparent py-1 px-2.5 rounded-full aria-[selected=true]:shadow"
              aria-checked={index === periodIndex}
            >
              {period.label}
            </button>
          ))}
        </ToggleGroup>
      </div>
      <StreamSongsChart period={PERIODS[periodIndex].value} />
    </Card>
  );
};
