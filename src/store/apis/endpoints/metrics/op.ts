import {
  EUserGrowthPeriod,
  IPeriodBasedMetrics,
  IRevenue,
  IUserGrowth,
} from "./type";

export const METRIC_OUTPUT: IPeriodBasedMetrics = {
  weekly: {
    users: {
      total: {
        current: 300000,
        growth: 2.1,
      },
      active: {
        current: 110000,
        growth: 1.5,
      },
    },
    streams: {
      total: {
        current: 4500000,
        growth: 0.5,
      },
    },
  },
  monthly: {
    users: {
      total: {
        current: 1200000,
        growth: 8.25,
      },
      active: {
        current: 450000,
        growth: -2.5,
      },
    },
    streams: {
      total: {
        current: 18000000,
        growth: -0.98,
      },
    },
  },
};

export const REVENUE_OUTPUT: IRevenue = {
  total: 2500000,
  subscriptions: 1800000,
  ads: 700000,
  growth: 2.3,
};

export const USER_GROWTH_OUTPUT: IUserGrowth = {
  [EUserGrowthPeriod.THREE_MO]: [
    {
      month: "Dec 2024",
      totalUsers: 320000,
      activeUsers: 160000,
    },
    {
      month: "Jan 2025",
      totalUsers: 340000,
      activeUsers: 170000,
    },
    {
      month: "Feb 2025",
      totalUsers: 360000,
      activeUsers: 180000,
    },
  ],
  [EUserGrowthPeriod.SIX_MO]: [
    {
      month: "Sep 2024",
      totalUsers: 270000,
      activeUsers: 135000,
    },
    {
      month: "Oct 2024",
      totalUsers: 285000,
      activeUsers: 142000,
    },
    {
      month: "Nov 2024",
      totalUsers: 300000,
      activeUsers: 150000,
    },
    {
      month: "Dec 2024",
      totalUsers: 320000,
      activeUsers: 160000,
    },
    {
      month: "Jan 2025",
      totalUsers: 340000,
      activeUsers: 170000,
    },
    {
      month: "Feb 2025",
      totalUsers: 360000,
      activeUsers: 180000,
    },
  ],
  [EUserGrowthPeriod.ONE_Y]: [
    {
      month: "Mar 2024",
      totalUsers: 180000,
      activeUsers: 90000,
    },
    {
      month: "Apr 2024",
      totalUsers: 195000,
      activeUsers: 98000,
    },
    {
      month: "May 2024",
      totalUsers: 210000,
      activeUsers: 105000,
    },
    {
      month: "Jun 2024",
      totalUsers: 225000,
      activeUsers: 112000,
    },
    {
      month: "Jul 2024",
      totalUsers: 240000,
      activeUsers: 120000,
    },
    {
      month: "Aug 2024",
      totalUsers: 255000,
      activeUsers: 128000,
    },
    {
      month: "Sep 2024",
      totalUsers: 270000,
      activeUsers: 135000,
    },
    {
      month: "Oct 2024",
      totalUsers: 285000,
      activeUsers: 142000,
    },
    {
      month: "Nov 2024",
      totalUsers: 300000,
      activeUsers: 150000,
    },
    {
      month: "Dec 2024",
      totalUsers: 320000,
      activeUsers: 160000,
    },
    {
      month: "Jan 2025",
      totalUsers: 340000,
      activeUsers: 170000,
    },
    {
      month: "Feb 2025",
      totalUsers: 360000,
      activeUsers: 180000,
    },
  ],
};
