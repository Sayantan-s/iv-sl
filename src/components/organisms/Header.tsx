import { Logo } from "@components/atoms/Logo";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="text-gray-700 flex items-start gap-3">
      <Logo />
      <div>
        <h1 className="md::text-lg text-base">Overview Dashboard</h1>
        <p className="md:text-sm text-xs text-gray-400">
          General sales and growth analytics
        </p>
      </div>
    </header>
  );
};
