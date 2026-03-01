import { Period } from '@entities/period/period.interface';
import { StatsCell } from './stats-cell.interface';

export interface PeriodStats {
  period: Period;
  stats: StatsCell;
}
