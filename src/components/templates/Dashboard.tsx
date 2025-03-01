import { RevenueCard } from "@components/organisms/RevenueCard";
import { MetricsCards } from "@components/organisms/MetricsCard";
import { MostStreamedSongs } from "@components/organisms/MostStreamSongs";
import { Usergrowth } from "@components/organisms/UserGrowth";
import { Header } from "@components/organisms/Header";
import { Datatable } from "@components/organisms/Datatable";
import { Fragment } from "react/jsx-runtime";
import { SpeedDial } from "@components/utils/SpeedDial";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="w-full bg-gray-100 min-h-screen xl:py-10 py-0">
        <div className="mx-auto w-full max-w-[1300px] xl:rounded-2xl overflow-hidden bg-white p-6 space-y-4">
          <Header />
          <div className="flex gap-4 lg:flex-row flex-col">
            <RevenueCard />
            <MetricsCards />
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <Datatable />
            <div className="flex flex-col gap-4 xl:flex-[0.35] flex-[0.4]">
              <MostStreamedSongs />
              <Usergrowth />
            </div>
          </div>
        </div>
      </div>
      <SpeedDial />
    </Fragment>
  );
};

export default Dashboard;
