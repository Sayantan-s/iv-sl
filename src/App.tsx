import { RevenueCard } from "./components/templates/RevenueCard";
import { MetricsCards } from "./components/templates/MetricsCard";
import { Datatable } from "./components/templates/Datatable";
import { MostStreamedSongs } from "./components/templates/MostStreamedSongs";
import { Usergrowth } from "./components/templates/Usergrowth";

const App = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen py-10">
      <div className="mx-auto w-full max-w-[1300px] rounded-2xl overflow-hidden bg-white p-6 space-y-4">
        <div className="flex gap-4">
          <RevenueCard />
          <MetricsCards />
        </div>
        <div className="flex gap-4">
          <Datatable />
          <div className="flex flex-col gap-4 flex-[0.35]">
            <MostStreamedSongs />
            <Usergrowth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
