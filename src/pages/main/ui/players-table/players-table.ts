import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PlayerData } from '@entities/player-datas';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { INNER_COLUMNS } from '../../data/inner-columns.constant';
import { MAIN_COLUMNS } from '../../data/main-columns.constant';
import { PERIODS } from '../../data/players-data.constant';
import { PeriodStats } from '../../model/period-stats.interface';
import { PlayerRow } from '../../model/player-row.interface';
import { FormatStatPipe } from '../format-stat/format-stat.pipe';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.html',
  styleUrls: ['./players-table.css'],
  imports: [NzTableModule, FormatStatPipe, NzTypographyModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersTableComponent {
  playersData = input.required<PlayerData[]>();
  playersRows = computed(() => this.mapPlayerData(this.playersData()));

  protected readonly MAIN_COLUMNS = MAIN_COLUMNS;
  protected readonly INNER_COLUMNS = INNER_COLUMNS;

  private mapPlayerData(playerData: PlayerData[]): PlayerRow[] {
    return playerData.map((dataItem, index) => {
      const totalGoals = Array.from(dataItem.statsByPeriod.values()).reduce(
        (accumulator, currentValue) => accumulator + (currentValue.goals ?? 0),
        0,
      );

      const totalTrainings = Array.from(dataItem.statsByPeriod.values()).reduce(
        (accumulator, currentValue) => accumulator + (currentValue.trainings ?? 0),
        0,
      );

      const totalAssists = Array.from(dataItem.statsByPeriod.values()).reduce(
        (accumulator, currentValue) => accumulator + (currentValue.assists ?? 0),
        0,
      );

      const periodsStats: PeriodStats[] = Array.from(dataItem.statsByPeriod.entries()).map(([periodId, stats]) => {
        const period = PERIODS.find((p) => p.id === periodId);

        if (!period) {
          throw new Error(`Для ${dataItem.player.name} указан несуществующий id периода: ${periodId}`);
        }

        return {
          period,
          stats,
        };
      });

      return {
        id: index + 1,
        ...dataItem,
        totalGoals,
        totalAssists,
        totalTrainings,
        periodsStats,
        expand: false,
      };
    });
  }
}
