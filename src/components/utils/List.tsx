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
  tableHead: JSX.Element;
}

export const Table = <T,>({
  renderItem,
  isLoading,
  data,
  loadingFallback,
  className,
  isEmpty,
  isEmptyFallback,
  tableHead,
}: ListProps<T>) => (
  <div className={clsx(className, "relative")} role="table">
    {tableHead}
    {isLoading
      ? loadingFallback
      : isEmpty
      ? isEmptyFallback
      : map(data, renderItem)}
  </div>
);
