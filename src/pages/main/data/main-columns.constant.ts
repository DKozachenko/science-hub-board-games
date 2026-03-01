import { Column } from '../model/column.interface';
import { PlayerRow } from '../model/player-row.interface';

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
    listOfFilter: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
    ],
    filterFn: (list: string[], row: PlayerRow) => list.some((name) => row.player.name.indexOf(name) !== -1),
  },
  {
    name: 'Кол-во тренировок',
    width: '30%',
    showSort: true,
    sortDirections: ['ascend', 'descend', null],
    sortOrder: null,
    sortFn: (a: PlayerRow, b: PlayerRow) => a.totalTrainings - b.totalTrainings,
    showFilter: true,
    filterMultiple: true,
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Кол-во голов',
    width: '30%',
    showSort: true,
    sortDirections: ['ascend', 'descend', null],
    sortOrder: null,
    sortFn: (a: PlayerRow, b: PlayerRow) => a.totalGoals - b.totalGoals,
    showFilter: true,
    filterMultiple: true,
    listOfFilter: [],
    filterFn: null,
  },
];
