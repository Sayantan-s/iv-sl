import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="text-gray-700">
      <div>
        <h1 className="text-xl">Overview Dashboard</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Take look at the general sales and growth analytics
        </p>
      </div>
    </header>
  );
};
