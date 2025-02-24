import { LabelList, Pie, PieChart, PieProps } from "recharts";

import { ChartConfig, Container, Tooltip, TooltipContent } from ".";
import clsx from "clsx";
import {
  Formatter,
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { JSX } from "react";

interface Props<T> {
  config: ChartConfig;
  data: T[];
  className?: string;
  dataKey: string;
  nameKey: string;
  labelListClassName: string;
  tooltipContentClassName?: string;
  tooltipValueFormatter: (
    value: ValueType,
    payload: Payload<ValueType, NameType>
  ) => JSX.Element;
  onPieClick: (value: T) => void;
}

export const Chart = <T,>({
  className,
  dataKey,
  data,
  nameKey,
  config,
  labelListClassName,
  tooltipValueFormatter,
  tooltipContentClassName,
  onPieClick,
}: Props<T>) => {
  const handlePieClick: PieProps["onClick"] = (data) =>
    onPieClick(data.payload.payload);

  const handleToolTipFormatter: Formatter<ValueType, NameType> = (
    value,
    ...args
  ) => {
    const payload = args[args.length - 1] as Payload<ValueType, NameType>;
    return tooltipValueFormatter(value, payload);
  };

  return (
    <Container
      config={config}
      className={clsx(
        `w-full mx-auto p-6 
        bg-[linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5),linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5)] 
        bg-[length:10px_10px] bg-white aspect-square`,
        className
      )}
    >
      <PieChart>
        <Tooltip
          content={
            <TooltipContent
              nameKey={nameKey}
              className={tooltipContentClassName}
              hideIndicator
              hideLabel
              formatter={handleToolTipFormatter}
            />
          }
        />
        <Pie data={data} dataKey={dataKey} onClick={handlePieClick}>
          <LabelList
            dataKey={nameKey}
            stroke={"none"}
            className={labelListClassName}
            fontSize={12}
            formatter={(value: keyof typeof config) => config[value]?.label}
          />
        </Pie>
      </PieChart>
    </Container>
  );
};
