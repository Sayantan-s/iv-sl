import { Bar, BarChart, LabelList, Rectangle } from "recharts";

import { ChartConfig, Container, Tooltip, TooltipContent } from ".";
import {
  Formatter,
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { JSX, useCallback } from "react";
import clsx from "clsx";

interface IShadeProps {
  upShade: string;
  downShade: string;
}

interface IActiveConfig {
  index: number;
  activeShades: IShadeProps;
  inactiveShades: IShadeProps;
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

  const barShape = useCallback(
    (props: Record<string, any>) => {
      const { x, y, width, height } = props;
      return (
        <g>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={"url(#pattern-stripe)"}
            rx={radius}
            ry={radius}
          />
        </g>
      );
    },
    [radius]
  );

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
        <defs>
          <pattern
            id="pattern-stripe-active"
            width={8}
            height={8}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(40)"
          >
            <rect
              width="4"
              height="8"
              fill={
                activeConfig.activeShades.upShade || "var(--color-orange-500)"
              }
            />
            <rect
              x="4"
              width="4"
              height="8"
              fill={
                activeConfig.activeShades.downShade || "var(--color-orange-400)"
              }
            />
          </pattern>
          <pattern
            id="pattern-stripe"
            width={8}
            height={8}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(40)"
          >
            <rect
              width="4"
              height="8"
              fill={
                activeConfig.inactiveShades.downShade ||
                "var(--color-orange-50)"
              }
            />
            <rect
              x="4"
              width="4"
              height="8"
              fill={
                activeConfig.inactiveShades.upShade || "var(--color-orange-100)"
              }
            />
          </pattern>
        </defs>
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
          radius={radius}
          activeIndex={activeConfig.index}
          fill="url(#pattern-stripe)"
          className="cursor-pointer"
          activeBar={({ ...props }) => {
            return (
              <Rectangle
                {...props}
                strokeDasharray={4}
                strokeDashoffset={4}
                fill={"url(#pattern-stripe-active)"}
                radius={radius}
              />
            );
          }}
          shape={barShape}
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
