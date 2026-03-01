import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PLAYER_DATA } from '../../data/players-data.constant';
import { PlayersTableComponent } from '../players-table/players-table';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  imports: [NzRowDirective, NzColDirective, NzTypographyModule, PlayersTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  protected readonly PLAYER_DATA = PLAYER_DATA;
}
