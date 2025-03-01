import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type IProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Card: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <figure
      {...rest}
      className={clsx(className, "p-4 border border-gray-200 rounded-2xl")}
    >
      {children}
    </figure>
  );
};
