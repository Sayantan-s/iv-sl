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
  Monthly = "monthly",
  Yearly = "yearly",
}

export interface IRevenue {
  total: number;
  subscriptions: number;
  ads: number;
  growth: number;
}

export interface IUserGrowthMetrics {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

export enum EUserGrowthPeriod {
  THREE_MO = "3M",
  SIX_MO = "6M",
  ONE_Y = "1Y",
}

export interface IUserGrowth {
  "3M": IUserGrowthMetrics[];
  "6M": IUserGrowthMetrics[];
  "1Y": IUserGrowthMetrics[];
}
