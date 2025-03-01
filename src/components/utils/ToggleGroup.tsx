import clsx from "clsx";
import React, { cloneElement, FC, PropsWithChildren } from "react";

export interface IProps {
  selectedItemIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  disabled?: boolean;
}

export interface ICTXProps {
  currentIndex: number;
}

export const ToggleGroup: FC<PropsWithChildren<IProps>> = ({
  children,
  selectedItemIndex,
  onSelect,
  className,
  disabled,
}) => {
  return (
    <div role="tab">
      <div className={clsx(className)} role="tablist">
        {React.Children.map(children, (child: any, index) => {
          if (child.type !== "button")
            throw new Error("Child should be of type `button`");
          return cloneElement(child, {
            "aria-selected": selectedItemIndex === index,
            onClick: () => onSelect(index),
            disabled,
            role: "tab",
          });
        })}
      </div>
    </div>
  );
};
