import { IMetrics, IRevenue } from "./type";

export const METRIC_OUTPUT: IMetrics = {
  totalUsers: 1200000,
  activeUsers: 450000,
  totalStreams: 18000000,
};

export const REVENUE_OUTPUT: IRevenue = {
  generated: {
    total: 2500000,
    subscriptions: 1800000,
    ads: 700000,
  },
  distributions: {
    subscriptions: 72,
    ads: 28,
  },
};
