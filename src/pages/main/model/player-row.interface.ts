import { PlayerData } from '@entities/player-data/player-data.interface';
import { PeriodStats } from './period-stats.interface';

export interface PlayerRow extends PlayerData {
  id: number;
  expand: boolean;
  totalGoals: number;
  totalTrainings: number;
  periodsStats: PeriodStats[];
}
