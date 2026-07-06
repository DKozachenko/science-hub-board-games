import { PlayerData } from '@entities/player-datas';
import { PeriodStats } from './period-stats.interface';

export interface PlayerRow extends PlayerData {
  id: number;
  expand: boolean;
  totalGoals: number;
  totalAssists: number;
  totalTrainings: number;
  periodsStats: PeriodStats[];
}
