import { IPeriodBasedMetrics, IRevenue, IUserGrowth } from "./type";

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

export const USER_GROW_OUTPUT: IUserGrowth[] = [
  {
    year: 2025,
    data: [
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
  },
  {
    year: 2024,
    data: [
      {
        month: "Jan 2024",
        totalUsers: 150000,
        activeUsers: 75000,
      },
      {
        month: "Feb 2024",
        totalUsers: 165000,
        activeUsers: 82000,
      },
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
    ],
  },
  {
    year: 2023,
    data: [
      {
        month: "Jan 2023",
        totalUsers: 50000,
        activeUsers: 25000,
      },
      {
        month: "Feb 2023",
        totalUsers: 60000,
        activeUsers: 30000,
      },
      {
        month: "Mar 2023",
        totalUsers: 70000,
        activeUsers: 35000,
      },
      {
        month: "Apr 2023",
        totalUsers: 80000,
        activeUsers: 40000,
      },
      {
        month: "May 2023",
        totalUsers: 90000,
        activeUsers: 45000,
      },
      {
        month: "Jun 2023",
        totalUsers: 100000,
        activeUsers: 50000,
      },
      {
        month: "Jul 2023",
        totalUsers: 110000,
        activeUsers: 55000,
      },
      {
        month: "Aug 2023",
        totalUsers: 120000,
        activeUsers: 60000,
      },
      {
        month: "Sep 2023",
        totalUsers: 130000,
        activeUsers: 65000,
      },
      {
        month: "Oct 2023",
        totalUsers: 140000,
        activeUsers: 70000,
      },
      {
        month: "Nov 2023",
        totalUsers: 145000,
        activeUsers: 72500,
      },
      {
        month: "Dec 2023",
        totalUsers: 150000,
        activeUsers: 75000,
      },
    ],
  },
];
