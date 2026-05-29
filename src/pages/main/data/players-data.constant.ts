import { Period } from '@entities/periods';
import { PlayerData } from '@entities/player-datas';
import { Player } from '@entities/players';

export const PLAYERS: Player[] = [
  { id: 1, name: 'Соня' },
  { id: 2, name: 'Даша' },
  { id: 3, name: 'Полина' },
  { id: 4, name: 'Оля Кривенко' },
  { id: 5, name: 'Диана Михниченко' },
  { id: 6, name: 'Маша' },
  { id: 7, name: 'Юля' },
  { id: 8, name: 'Дарина' },
  { id: 9, name: 'Вика' },
  { id: 10, name: 'Лена' },
  { id: 11, name: 'Настя J' },
  { id: 12, name: 'Аннушка' },
  { id: 13, name: 'Юля Яковлева' },
  { id: 14, name: 'Анна' },
  { id: 15, name: 'Тиана' },
  { id: 16, name: 'Таня' },
  { id: 17, name: 'Оля Михайленко' },
  { id: 18, name: 'Алина' },
  { id: 19, name: 'Люся' },
  { id: 20, name: 'Диана Козаченко' },
  { id: 21, name: 'Яна' },
  { id: 22, name: 'Уля' },
  { id: 23, name: 'Вика Комратова' },
  { id: 24, name: 'Татьяна (мама Вики)' },
  { id: 25, name: 'Лиза' },
  { id: 26, name: 'Оля' },
];

export const PERIODS: Period[] = [
  { id: 1, label: 'Декабрь 2025' },
  { id: 2, label: 'Январь 2026' },
  { id: 3, label: 'Февраль 2026' },
  { id: 4, label: 'Март 2026' },
  { id: 5, label: 'Апрель 2026' },
  { id: 6, label: 'Май 2026' },
];

export const PLAYER_DATA: PlayerData[] = [
  {
    player: PLAYERS[0], // Соня
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 0 }],
      [2, { trainings: 0, goals: 0 }],
      [4, { trainings: 2, goals: 1 }],
      [5, { trainings: 2, goals: 1 }],
    ]),
  },
  {
    player: PLAYERS[1], // Даша
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 12 }],
      [2, { trainings: 3, goals: 6 }],
      [3, { trainings: 3, goals: 3 }],
      [4, { trainings: 1, goals: 2 }],
      [5, { trainings: 1, goals: 2 }],
    ]),
  },
  {
    player: PLAYERS[2], // Полина
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 1 }],
      [2, { trainings: 3, goals: 0 }],
      [3, { trainings: 2, goals: 3 }],
      [4, { trainings: 3, goals: 0 }],
      [5, { trainings: 9, goals: 2 }],
      [6, { trainings: 3, goals: 3 }],
    ]),
  },
  {
    player: PLAYERS[3], // Оля Кривенко
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 9 }],
      [2, { trainings: 2, goals: 4 }],
      [3, { trainings: 3, goals: 6 }],
      [4, { trainings: 4, goals: 17 }],
      [5, { trainings: 8, goals: 12 }],
      [6, { trainings: 3, goals: 12 }],
    ]),
  },
  {
    player: PLAYERS[4], // Диана Михниченко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 5 }],
      [2, { trainings: 1, goals: 0 }],
      [3, { trainings: 6, goals: 8 }],
      [4, { trainings: 6, goals: 6 }],
      [5, { trainings: 10, goals: 10 }],
      [6, { trainings: 6, goals: 15 }],
    ]),
  },
  {
    player: PLAYERS[5], // Маша
    statsByPeriod: new Map([
      [1, { trainings: 8, goals: 12 }],
      [2, { trainings: 4, goals: 3 }],
      [3, { trainings: 6, goals: 9 }],
      [4, { trainings: 7, goals: 17 }],
      [5, { trainings: 11, goals: 16 }],
      [6, { trainings: 6, goals: 13 }],
    ]),
  },
  {
    player: PLAYERS[6], // Юля
    statsByPeriod: new Map([
      [1, { trainings: 6, goals: 7 }],
      [2, { trainings: 4, goals: 2 }],
      [3, { trainings: 7, goals: 12 }],
      [4, { trainings: 3, goals: 2 }],
      [5, { trainings: 13, goals: 19 }],
      [6, { trainings: 3, goals: 7 }],
    ]),
  },
  {
    player: PLAYERS[7], // Дарина
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0 }],
      [2, { trainings: 1, goals: 1 }],
      [3, { trainings: 7, goals: 8 }],
      [4, { trainings: 5, goals: 9 }],
      [5, { trainings: 10, goals: 14 }],
      [6, { trainings: 5, goals: 15 }],
    ]),
  },
  {
    player: PLAYERS[8], // Вика
    statsByPeriod: new Map([
      [1, { trainings: 8, goals: 17 }],
      [2, { trainings: 3, goals: 4 }],
      [3, { trainings: 7, goals: 15 }],
      [4, { trainings: 7, goals: 16 }],
      [5, { trainings: 12, goals: 16 }],
      [6, { trainings: 6, goals: 17 }],
    ]),
  },
  {
    player: PLAYERS[9], // Лена
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 9 }],
      [2, { trainings: 4, goals: 2 }],
      [3, { trainings: 2, goals: 2 }],
      [4, { trainings: 2, goals: 4 }],
      [5, { trainings: 6, goals: 15 }],
      [6, { trainings: 4, goals: 9 }],
    ]),
  },
  {
    player: PLAYERS[10], // Настя J
    statsByPeriod: new Map([
      [1, { trainings: 2, goals: 2 }],
      [2, { trainings: 0, goals: 0 }],
      [4, { trainings: 1, goals: 1 }],
      [5, { trainings: 9, goals: 13 }],
      [6, { trainings: 4, goals: 11 }],
    ]),
  },
  {
    player: PLAYERS[11], // Аннушка
    statsByPeriod: new Map([
      [1, { trainings: 3, goals: 3 }],
      [2, { trainings: 2, goals: 1 }],
      [3, { trainings: 4, goals: 2 }],
      [4, { trainings: 2, goals: 0 }],
      [5, { trainings: 3, goals: 1 }],
      [6, { trainings: 1, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[12], // Юля Яковлева
    statsByPeriod: new Map([
      [1, { trainings: 6, goals: 11 }],
      [2, { trainings: 4, goals: 5 }],
      [3, { trainings: 2, goals: 3 }],
      [4, { trainings: 7, goals: 16 }],
      [5, { trainings: 9, goals: 15 }],
    ]),
  },
  {
    player: PLAYERS[13], // Анна
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0 }],
      [2, { trainings: 0, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[14], // Тиана
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0 }],
      [2, { trainings: 0, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[15], // Таня
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0 }],
      [2, { trainings: 0, goals: 0 }],
      [4, { trainings: 1, goals: 1 }],
      [5, { trainings: 6, goals: 2 }],
    ]),
  },
  {
    player: PLAYERS[16], // Оля Михайленко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 1 }],
      [2, { trainings: 3, goals: 5 }],
      [3, { trainings: 4, goals: 8 }],
      [4, { trainings: 4, goals: 3 }],
      [5, { trainings: 5, goals: 5 }],
      [6, { trainings: 3, goals: 4 }],
    ]),
  },
  {
    player: PLAYERS[17], // Алина
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 1 }],
      [2, { trainings: 0, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[18], // Люся
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 1 }],
      [2, { trainings: 0, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[19], // Диана Козаченко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 15 }],
      [2, { trainings: 5, goals: 10 }],
      [3, { trainings: 5, goals: 11 }],
      [4, { trainings: 7, goals: 11 }],
      [5, { trainings: 14, goals: 24 }],
      [6, { trainings: 6, goals: 13 }],
    ]),
  },
  {
    player: PLAYERS[20], // Яна
    statsByPeriod: new Map([
      [1, { trainings: 2, goals: 1 }],
      [2, { trainings: 0, goals: 0 }],
      [4, { trainings: 1, goals: 4 }],
      [5, { trainings: 6, goals: 2 }],
    ]),
  },
  {
    player: PLAYERS[21], // Уля
    statsByPeriod: new Map([[2, { trainings: 2, goals: 1 }]]),
  },
  {
    player: PLAYERS[22], // Вика Комратова
    statsByPeriod: new Map([
      [3, { trainings: 5, goals: 1 }],
      [4, { trainings: 6, goals: 0 }],
      [5, { trainings: 7, goals: 0 }],
      [6, { trainings: 7, goals: 0 }],
    ]),
  },
  {
    player: PLAYERS[23], // Татьяна (мама Вики)
    statsByPeriod: new Map([[4, { trainings: 1, goals: 1 }]]),
  },
  {
    player: PLAYERS[24], // Лиза
    statsByPeriod: new Map([
      [5, { trainings: 2, goals: 1 }],
      [6, { trainings: 1, goals: 2 }],
    ]),
  },
  {
    player: PLAYERS[25], // Оля
    statsByPeriod: new Map([
      [5, { trainings: 1, goals: 0 }],
      [6, { trainings: 2, goals: 1 }],
    ]),
  },
];
