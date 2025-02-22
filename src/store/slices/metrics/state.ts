import { initialStateCreator } from "../../utils/stateCreator";

const METRIC_INITIALSTATE = {
  totalUsers: 0,
  activeUsers: 0,
  totalStreams: 0,
};

const REVENUE_INITIALSTATE = {
  generated: {
    total: 0,
    subscriptions: 0,
    ads: 0,
  },
  distributions: {
    subscriptions: 0,
    ads: 0,
  },
};

export const initialStateMetrics = {
  metrics: initialStateCreator("data", METRIC_INITIALSTATE),
  revenue: initialStateCreator("data", REVENUE_INITIALSTATE),
};
