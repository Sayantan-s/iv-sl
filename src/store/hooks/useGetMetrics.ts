import { useSelector } from "..";
import { IMetricsPayload } from "../apis/endpoints/metrics/type";

export const useGetStreams = (payload: IMetricsPayload) =>
  useSelector((state) => ({
    ...state.metrics.metrics,
    data: state.metrics.metrics.data[payload.period].streams,
  }));

export const useGetUsers = (payload: IMetricsPayload) =>
  useSelector((state) => ({
    ...state.metrics.metrics,
    data: state.metrics.metrics.data[payload.period].users,
  }));
