import { UserGroupIcon } from "@heroicons/react/24/solid";
import { metricsApi } from "./store/apis/endpoints/metrics";
import { formatToK } from "./utils/formatToK";
import { useMemo } from "react";

const App = () => {
  const { data } = metricsApi.useMetricsQuery();
  const metricData = useMemo(
    () => [
      {
        key: "Total Users",
        value: data?.totalUsers,
      },
      {
        key: "Active Users",
        value: data?.activeUsers,
      },
      {
        key: "Total Streams",
        value: data?.totalStreams,
      },
    ],
    [data]
  );

  return (
    <div className="flex flex-col gap-4">
      {metricData.map(({ key, value }) => (
        <div
          key={key}
          className="bg-white p-4 border border-gray-100 flex items-start gap-2.5 shadow shadow-gray-400/10"
        >
          <div className="w-14 flex-shrink-0 bg-orange-50 border border-orange-200 aspect-square flex items-center justify-center rounded-full">
            <UserGroupIcon className="size-6 text-orange-600" />
          </div>
          <div>
            <h4 className="text-xs text-gray-400">{key}</h4>
            <p className="text-3xl text-gray-700 mt-0.5">{formatToK(value!)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
