import {
  IPeriodBasedMetrics,
  IRevenue,
} from "../../apis/endpoints/metrics/type";
import { initialStateCreator } from "../../utils/stateCreator";

const METRIC_INITIALSTATE: IPeriodBasedMetrics = {
  weekly: {
    users: {
      total: { current: 0, growth: 0 },
      active: { current: 0, growth: 0 },
    },
    streams: { total: { current: 0, growth: 0 } },
  },
  monthly: {
    users: {
      total: { current: 0, growth: 0 },
      active: { current: 0, growth: 0 },
    },
    streams: { total: { current: 0, growth: 0 } },
  },
};

const REVENUE_INITIALSTATE: IRevenue = {
  total: 0,
  subscriptions: 0,
  ads: 0,
  growth: 0,
};

export const initialStateMetrics = {
  metrics: initialStateCreator("data", METRIC_INITIALSTATE),
  revenue: initialStateCreator("data", REVENUE_INITIALSTATE),
};
