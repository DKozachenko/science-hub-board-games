import { Period } from '@entities/period/period.interface';
import { Player } from '@entities/player/player.interface';
import { StatsCell } from '@pages/main/model/stats-cell.interface';

export interface PlayerData {
  player: Player;
  statsByPeriod: Map<Period['id'], StatsCell>;
}
