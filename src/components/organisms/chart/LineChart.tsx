import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { ChartConfig, Container, Tooltip, TooltipContent } from ".";
import clsx from "clsx";
import {
  Formatter,
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { JSX, useMemo } from "react";

interface IChartConventions {
  dataKey: string;
  color: string;
}

interface Props<T> {
  config: ChartConfig;
  data: T[];
  convention: IChartConventions[];
  xAxisKey: string;
  xAxisColor: string;
  cartesianGridColor: string;
  className?: string;
  tooltipContentClassName?: string;
  tooltipValueFormatter: (
    value: ValueType,
    label: string,
    color: string
  ) => JSX.Element;
}

export const ChartLine = <T,>({
  config,
  data,
  convention,
  xAxisColor,
  xAxisKey,
  cartesianGridColor,
  className,
  tooltipValueFormatter,
  tooltipContentClassName,
}: Props<T>) => {
  const styles = useMemo(
    () => ({
      left: 12,
      right: 12,
    }),
    []
  );

  const handleTooltipFormatter: Formatter<ValueType, NameType> = (
    value,
    key,
    payload
  ) => {
    const label = config[key].label as string;
    return tooltipValueFormatter(value, label, payload.color!);
  };

  return (
    <Container
      config={config}
      className={clsx(
        "w-full mx-auto bg-[linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5),linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5)] bg-[length:10px_10px] bg-white",
        className
      )}
    >
      <LineChart accessibilityLayer data={data} margin={styles}>
        <CartesianGrid vertical={false} stroke={cartesianGridColor} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={xAxisColor}
        />
        <Tooltip
          cursor={false}
          content={
            <TooltipContent
              className={tooltipContentClassName}
              hideLabel
              hideIndicator
              formatter={handleTooltipFormatter}
            />
          }
        />
        {convention.map(({ dataKey, color }) => (
          <Line
            key={dataKey}
            dataKey={dataKey}
            type="monotone"
            stroke={color}
            strokeWidth={2.5}
            dot={false}
          />
        ))}
      </LineChart>
    </Container>
  );
};
