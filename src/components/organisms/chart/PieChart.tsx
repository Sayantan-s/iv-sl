import { Cell, LabelList, Pie, PieChart, PieProps } from "recharts";

import { ChartConfig, Container, Tooltip, TooltipContent } from ".";
import clsx from "clsx";
import {
  Formatter,
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { JSX, useState } from "react";
import { useSwitch } from "../../../hooks/useSwitch";

interface IShadeProps {
  upShade: string;
  downShade: string;
}

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
  radius?: number;
  shadeColors: IShadeProps[];
  bgGfx?: boolean;
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
  radius = 30,
  shadeColors,
  bgGfx,
}: Props<T>) => {
  const handlePieClick: PieProps["onClick"] = (data) =>
    onPieClick(data.payload.payload);

  const handlePieKeyDown: PieProps["onKeyDown"] = (data) =>
    onPieClick(data.payload.payload);

  const [isHighlighting, { on, off }] = useSwitch();
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleToolTipFormatter: Formatter<ValueType, NameType> = (
    value,
    ...args
  ) => {
    const payload = args[args.length - 1] as Payload<ValueType, NameType>;
    return tooltipValueFormatter(value, payload);
  };

  const handleMouseOver: PieProps["onMouseOver"] = (_, i) => {
    on();
    setActiveIndex(i);
  };

  const handleMouseOut: PieProps["onMouseLeave"] = () => {
    off();
    setActiveIndex(null);
  };

  return (
    <Container
      config={config}
      className={clsx(
        bgGfx
          ? "bg-[linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5),linear-gradient(45deg,#f5f5f5_25%,transparent_25%,transparent_75%,#f5f5f5_75%,#f5f5f5)] bg-[length:10px_10px]"
          : "",
        className,
        `w-full mx-auto p-6 bg-white aspect-square!`
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
        <defs>
          {shadeColors.map((color, index) => (
            <pattern
              key={`pattern-${index}`}
              id={`pattern-stripe-${index}`}
              width={8}
              height={8}
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="8" fill={color.upShade} />
              <rect x="4" width="4" height="8" fill={color.downShade} />
            </pattern>
          ))}
        </defs>
        <Pie
          data={data}
          dataKey={dataKey}
          onClick={handlePieClick}
          onKeyDown={handlePieKeyDown}
          startAngle={90}
          endAngle={450}
          cornerRadius={radius}
          innerRadius={radius}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
          tabIndex={1}
        >
          <LabelList
            dataKey={nameKey}
            stroke={"none"}
            className={clsx(labelListClassName, "z-50")}
            fontSize={12}
            formatter={(value: keyof typeof config) => config[value]?.label}
          />
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`url(#pattern-stripe-${index})`}
              stroke={shadeColors[index].upShade}
              strokeWidth={2}
              className={clsx(
                "duration-200 cursor-pointer z-40",
                isHighlighting && index === activeIndex
                  ? "opacity-80"
                  : "opacity-100"
              )}
            />
          ))}
        </Pie>
      </PieChart>
    </Container>
  );
};
