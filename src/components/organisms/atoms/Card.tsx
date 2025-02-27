import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const Card: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  return (
    <figure
      className={clsx(className, "p-4 border border-gray-200 rounded-2xl")}
    >
      {children}
    </figure>
  );
};
