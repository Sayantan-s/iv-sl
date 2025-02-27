import clsx from "clsx";
import { map } from "es-toolkit/compat";
import { JSX } from "react";

interface ListProps<T> {
  renderItem: (item: T, index: number) => JSX.Element;
  loadingFallback: JSX.Element;
  isLoading: boolean;
  isEmpty: boolean;
  isEmptyFallback: JSX.Element;
  data: T[];
  className?: string;
}

export const List = <T,>({
  renderItem,
  isLoading,
  data,
  loadingFallback,
  className,
  isEmpty,
  isEmptyFallback,
}: ListProps<T>) => (
  <div className={clsx(className, "relative")}>
    {isLoading
      ? loadingFallback
      : isEmpty
      ? isEmptyFallback
      : map(data, renderItem)}
  </div>
);
