interface INestedMetrics {
  growth: number;
  current: number;
}

export interface IMetrics {
  users: {
    total: INestedMetrics;
    active: INestedMetrics;
  };
  streams: {
    total: INestedMetrics;
  };
}

export interface IPeriodBasedMetrics {
  weekly: IMetrics;
  monthly: IMetrics;
}

export interface IMetricsPayload {
  period: "weekly" | "monthly";
}

export enum IPeriod {
  Weekly = "weekly",
  Monthly = "monthly",
}

export interface IRevenue {
  total: number;
  subscriptions: number;
  ads: number;
  growth: number;
}

interface IUserGrowthMetrics {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

export interface IUserGrowth {
  year: number;
  data: IUserGrowthMetrics[];
}
