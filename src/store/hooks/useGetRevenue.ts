import { useSelector } from "..";

export const useGetRevenue = () =>
  useSelector((state) => ({
    ...state.metrics.revenue,
    data: state.metrics.revenue.data,
  }));
