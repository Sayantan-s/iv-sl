import { useSelector } from "..";

export const useGetMetrics = () =>
  useSelector((state) => state.metrics.metrics);
