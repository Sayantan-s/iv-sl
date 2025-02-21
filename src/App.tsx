import { metricsApi } from "./store/apis/endpoints/metrics";

const App = () => {
  const { data } = metricsApi.useMetricsQuery();

  console.log(data);

  return (
    <div className="">
      <h1 className="bg-gray-100">Hello world</h1>
    </div>
  );
};

export default App;
