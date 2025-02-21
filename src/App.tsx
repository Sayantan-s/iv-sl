import { metricsApi } from "./store/apis/endpoints/metrics";

const App = () => {
  const { data } = metricsApi.useMetricsQuery();

  return (
    <div className="">
      <h1 className="bg-gray-100"></h1>
    </div>
  );
};

export default App;
