import { Column } from '../model/column.interface';
import { PlayerRow } from '../model/player-row.interface';
import { PLAYER_DATA } from './players-data.constant';

const PLAYERS_NAMES_FOR_FILTER: { text: string; value: number }[] = PLAYER_DATA.map((playerData) => ({
  text: playerData.player.name,
  value: playerData.player.id,
}));

export const MAIN_COLUMNS: Column[] = [
  {
    name: 'Имя',
    width: '30%',
    showSort: true,
    sortOrder: 'ascend',
    sortDirections: ['ascend', 'descend', null],
    sortFn: (a: PlayerRow, b: PlayerRow) => a.player.name.localeCompare(b.player.name),
    showFilter: true,
    filterMultiple: true,
    listOfFilter: PLAYERS_NAMES_FOR_FILTER,
    filterFn: (filterValues: number[], row: PlayerRow) => filterValues.some((id) => row.player.id === id),
  },
  {
    name: 'Тренировки',
    width: '30%',
    showSort: true,
    sortDirections: ['ascend', 'descend', null],
    sortOrder: null,
    sortFn: (a: PlayerRow, b: PlayerRow) => a.totalTrainings - b.totalTrainings,
    showFilter: false,
    filterMultiple: true,
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Голы',
    width: '30%',
    showSort: true,
    sortDirections: ['ascend', 'descend', null],
    sortOrder: null,
    sortFn: (a: PlayerRow, b: PlayerRow) => a.totalGoals - b.totalGoals,
    showFilter: false,
    filterMultiple: true,
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Голевые передачи',
    width: '30%',
    showSort: true,
    sortDirections: ['ascend', 'descend', null],
    sortOrder: null,
    sortFn: (a: PlayerRow, b: PlayerRow) => a.totalAssists - b.totalAssists,
    showFilter: false,
    filterMultiple: true,
    listOfFilter: [],
    filterFn: null,
  },
];
