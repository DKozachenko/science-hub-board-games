import { Period } from '@entities/periods';
import { Player } from '@entities/players';
import { Stats } from '@entities/stats';

export interface PlayerData {
  player: Player;
  statsByPeriod: Map<Period['id'], Stats>;
}
