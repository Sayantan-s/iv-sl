import { Bar, BarChart, LabelList, Rectangle } from "recharts";

import { ChartConfig, Container, Tooltip, TooltipContent } from ".";
import {
  Formatter,
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { JSX } from "react";
import clsx from "clsx";

interface IActiveConfig {
  index: number;
  stroke: string;
  fill: string;
}
interface Props<T> {
  config: ChartConfig;
  data: T[];
  className?: string;
  dataKey: string;
  activeConfig: IActiveConfig;
  labelListClassName: string;
  tooltipContentClassName?: string;
  tooltipValueFormatter: (
    value: ValueType,
    label: string,
    payload: T
  ) => JSX.Element;
  radius?: number;
}

export const Chart = <T,>({
  config,
  data,
  className,
  labelListClassName,
  dataKey,
  tooltipValueFormatter,
  tooltipContentClassName,
  activeConfig,
  radius = 8,
}: Props<T>) => {
  const handleTooltipFormatter: Formatter<ValueType, NameType> = (
    value,
    key,
    payload
  ) => {
    const label = config[key].label as string;
    return tooltipValueFormatter(value, label, payload.payload);
  };

  return (
    <Container
      config={config}
      className={clsx(
        `w-full mx-auto p-6 bg-[linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5),linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5)] bg-[length:10px_10px] bg-white`,
        className
      )}
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          top: 20,
        }}
      >
        <Tooltip
          cursor={false}
          content={
            <TooltipContent
              hideLabel
              hideIndicator
              className={tooltipContentClassName}
              formatter={handleTooltipFormatter}
            />
          }
        />
        <Bar
          dataKey={dataKey}
          fill="var(--color-desktop)"
          radius={radius}
          activeIndex={activeConfig.index}
          activeBar={({ ...props }) => {
            return (
              <Rectangle
                {...props}
                stroke={activeConfig.stroke}
                strokeDasharray={4}
                strokeDashoffset={4}
                fill={activeConfig.fill}
              />
            );
          }}
        >
          <LabelList
            position="top"
            offset={12}
            className={labelListClassName}
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </Container>
  );
};
