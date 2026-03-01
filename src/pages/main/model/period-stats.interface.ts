import { Period } from '@entities/periods';
import { Stats } from '@entities/stats';

export interface PeriodStats {
  period: Period;
  stats: Stats;
}
