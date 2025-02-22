export interface IMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
}

export interface IRevenue {
  generated: Generated;
  distributions: Distributions;
}

export interface Generated {
  total: number;
  subscriptions: number;
  ads: number;
}

export interface Distributions {
  subscriptions: number;
  ads: number;
}
