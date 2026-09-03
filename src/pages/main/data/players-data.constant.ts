import { Period } from '@entities/periods';
import { PlayerData } from '@entities/player-datas';
import { Player } from '@entities/players';

export const PLAYERS: Player[] = [
  { id: 1, name: 'Соня' },
  { id: 2, name: 'Даша' },
  { id: 3, name: 'Полина' },
  { id: 4, name: 'Оля Кривенко' },
  { id: 5, name: 'Диана Михниченко' },
  { id: 6, name: 'Маша Панихина' },
  { id: 7, name: 'Юля' },
  { id: 8, name: 'Дарина' },
  { id: 9, name: 'Вика' },
  { id: 10, name: 'Лена Павленко' },
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
  { id: 27, name: 'Наташа' },
  { id: 28, name: 'Маша' },
  { id: 29, name: 'Лена' },
  { id: 30, name: 'Женя' },
];

export const PERIODS: Period[] = [
  { id: 1, label: 'Декабрь 2025' },
  { id: 2, label: 'Январь 2026' },
  { id: 3, label: 'Февраль 2026' },
  { id: 4, label: 'Март 2026' },
  { id: 5, label: 'Апрель 2026' },
  { id: 6, label: 'Май 2026' },
  { id: 7, label: 'Июнь 2026' },
  { id: 8, label: 'Июль 2026' },
  { id: 9, label: 'Август 2026' },
];

export const PLAYER_DATA: PlayerData[] = [
  {
    player: PLAYERS[0], // Соня
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 0, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
      [4, { trainings: 2, goals: 1, assists: null }],
      [5, { trainings: 2, goals: 1, assists: null }],
    ]),
  },
  {
    player: PLAYERS[1], // Даша
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 12, assists: null }],
      [2, { trainings: 3, goals: 6, assists: null }],
      [3, { trainings: 3, goals: 3, assists: null }],
      [4, { trainings: 1, goals: 2, assists: null }],
      [5, { trainings: 1, goals: 2, assists: null }],
      [8, { trainings: 1, goals: 0, assists: 0 }],
      [9, { trainings: 1, goals: 1, assists: 1 }],
    ]),
  },
  {
    player: PLAYERS[2], // Полина
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 1, assists: null }],
      [2, { trainings: 3, goals: 0, assists: null }],
      [3, { trainings: 2, goals: 3, assists: null }],
      [4, { trainings: 3, goals: 0, assists: null }],
      [5, { trainings: 9, goals: 2, assists: null }],
      [6, { trainings: 3, goals: 3, assists: null }],
      [7, { trainings: 2, goals: 5, assists: 0 }],
      [8, { trainings: 5, goals: 3, assists: 1 }],
      [9, { trainings: 8, goals: 12, assists: 3 }],
    ]),
  },
  {
    player: PLAYERS[3], // Оля Кривенко
    statsByPeriod: new Map([
      [1, { trainings: 4, goals: 9, assists: null }],
      [2, { trainings: 2, goals: 4, assists: null }],
      [3, { trainings: 3, goals: 6, assists: null }],
      [4, { trainings: 4, goals: 17, assists: null }],
      [5, { trainings: 8, goals: 12, assists: null }],
      [6, { trainings: 3, goals: 12, assists: null }],
      [7, { trainings: 3, goals: 5, assists: 4 }],
      [8, { trainings: 5, goals: 5, assists: 1 }],
    ]),
  },
  {
    player: PLAYERS[4], // Диана Михниченко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 5, assists: null }],
      [2, { trainings: 1, goals: 0, assists: null }],
      [3, { trainings: 6, goals: 8, assists: null }],
      [4, { trainings: 6, goals: 6, assists: null }],
      [5, { trainings: 10, goals: 10, assists: null }],
      [6, { trainings: 6, goals: 15, assists: null }],
      [7, { trainings: 2, goals: 2, assists: 2 }],
      [8, { trainings: 1, goals: 0, assists: 0 }],
    ]),
  },
  {
    player: PLAYERS[5], // Маша Панихина
    statsByPeriod: new Map([
      [1, { trainings: 8, goals: 12, assists: null }],
      [2, { trainings: 4, goals: 3, assists: null }],
      [3, { trainings: 6, goals: 9, assists: null }],
      [4, { trainings: 7, goals: 17, assists: null }],
      [5, { trainings: 11, goals: 16, assists: null }],
      [6, { trainings: 6, goals: 13, assists: null }],
      [7, { trainings: 5, goals: 5, assists: 5 }],
      [8, { trainings: 8, goals: 6, assists: 6 }],
      [9, { trainings: 7, goals: 8, assists: 4 }],
    ]),
  },
  {
    player: PLAYERS[6], // Юля
    statsByPeriod: new Map([
      [1, { trainings: 6, goals: 7, assists: null }],
      [2, { trainings: 4, goals: 2, assists: null }],
      [3, { trainings: 7, goals: 12, assists: null }],
      [4, { trainings: 3, goals: 2, assists: null }],
      [5, { trainings: 13, goals: 19, assists: null }],
      [6, { trainings: 3, goals: 7, assists: null }],
      [7, { trainings: 4, goals: 8, assists: 5 }],
    ]),
  },
  {
    player: PLAYERS[7], // Дарина
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0, assists: null }],
      [2, { trainings: 1, goals: 1, assists: null }],
      [3, { trainings: 7, goals: 8, assists: null }],
      [4, { trainings: 5, goals: 9, assists: null }],
      [5, { trainings: 10, goals: 14, assists: null }],
      [6, { trainings: 5, goals: 15, assists: null }],
      [7, { trainings: 5, goals: 6, assists: 5 }],
      [8, { trainings: 9, goals: 11, assists: 1 }],
      [9, { trainings: 6, goals: 8, assists: 3 }],
    ]),
  },
  {
    player: PLAYERS[8], // Вика
    statsByPeriod: new Map([
      [1, { trainings: 8, goals: 17, assists: null }],
      [2, { trainings: 3, goals: 4, assists: null }],
      [3, { trainings: 7, goals: 15, assists: null }],
      [4, { trainings: 7, goals: 16, assists: null }],
      [5, { trainings: 12, goals: 16, assists: null }],
      [6, { trainings: 6, goals: 17, assists: null }],
      [7, { trainings: 7, goals: 10, assists: 2 }],
      [8, { trainings: 9, goals: 7, assists: 6 }],
    ]),
  },
  {
    player: PLAYERS[9], // Лена Павленко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 9, assists: null }],
      [2, { trainings: 4, goals: 2, assists: null }],
      [3, { trainings: 2, goals: 2, assists: null }],
      [4, { trainings: 2, goals: 4, assists: null }],
      [5, { trainings: 6, goals: 15, assists: null }],
      [6, { trainings: 4, goals: 9, assists: null }],
      [7, { trainings: 2, goals: 6, assists: 4 }],
      [8, { trainings: 2, goals: 0, assists: 1 }],
      [9, { trainings: 6, goals: 6, assists: 10 }],
    ]),
  },
  {
    player: PLAYERS[10], // Настя J
    statsByPeriod: new Map([
      [1, { trainings: 2, goals: 2, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
      [4, { trainings: 1, goals: 1, assists: null }],
      [5, { trainings: 9, goals: 13, assists: null }],
      [6, { trainings: 4, goals: 11, assists: null }],
      [7, { trainings: 6, goals: 10, assists: 5 }],
      [8, { trainings: 6, goals: 7, assists: 4 }],
    ]),
  },
  {
    player: PLAYERS[11], // Аннушка
    statsByPeriod: new Map([
      [1, { trainings: 3, goals: 3, assists: null }],
      [2, { trainings: 2, goals: 1, assists: null }],
      [3, { trainings: 4, goals: 2, assists: null }],
      [4, { trainings: 2, goals: 0, assists: null }],
      [5, { trainings: 3, goals: 1, assists: null }],
      [6, { trainings: 1, goals: 0, assists: null }],
      [7, { trainings: 1, goals: 0, assists: 0 }],
    ]),
  },
  {
    player: PLAYERS[12], // Юля Яковлева
    statsByPeriod: new Map([
      [1, { trainings: 6, goals: 11, assists: null }],
      [2, { trainings: 4, goals: 5, assists: null }],
      [3, { trainings: 2, goals: 3, assists: null }],
      [4, { trainings: 7, goals: 16, assists: null }],
      [5, { trainings: 9, goals: 15, assists: null }],
      [8, { trainings: 5, goals: 13, assists: 3 }],
      [9, { trainings: 2, goals: 0, assists: 2 }],
    ]),
  },
  {
    player: PLAYERS[13], // Анна
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
    ]),
  },
  {
    player: PLAYERS[14], // Тиана
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
      [9, { trainings: 4, goals: 3, assists: 3 }],
    ]),
  },
  {
    player: PLAYERS[15], // Таня
    statsByPeriod: new Map([
      [1, { trainings: 0, goals: 0, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
      [4, { trainings: 1, goals: 1, assists: null }],
      [5, { trainings: 6, goals: 2, assists: null }],
      [9, { trainings: 1, goals: 0, assists: 0 }],
    ]),
  },
  {
    player: PLAYERS[16], // Оля Михайленко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 1, assists: null }],
      [2, { trainings: 3, goals: 5, assists: null }],
      [3, { trainings: 4, goals: 8, assists: null }],
      [4, { trainings: 4, goals: 3, assists: null }],
      [5, { trainings: 5, goals: 5, assists: null }],
      [6, { trainings: 3, goals: 4, assists: null }],
      [7, { trainings: 4, goals: 10, assists: 3 }],
      [8, { trainings: 2, goals: 0, assists: 0 }],
      [9, { trainings: 6, goals: 11, assists: 5 }],
    ]),
  },
  {
    player: PLAYERS[17], // Алина
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 1, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
    ]),
  },
  {
    player: PLAYERS[18], // Люся
    statsByPeriod: new Map([
      [1, { trainings: 1, goals: 1, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
    ]),
  },
  {
    player: PLAYERS[19], // Диана Козаченко
    statsByPeriod: new Map([
      [1, { trainings: 5, goals: 15, assists: null }],
      [2, { trainings: 5, goals: 10, assists: null }],
      [3, { trainings: 5, goals: 11, assists: null }],
      [4, { trainings: 7, goals: 11, assists: null }],
      [5, { trainings: 14, goals: 24, assists: null }],
      [6, { trainings: 6, goals: 13, assists: null }],
      [7, { trainings: 5, goals: 8, assists: 8 }],
      [8, { trainings: 8, goals: 9, assists: 13 }],
      [9, { trainings: 6, goals: 12, assists: 5 }],
    ]),
  },
  {
    player: PLAYERS[20], // Яна
    statsByPeriod: new Map([
      [1, { trainings: 2, goals: 1, assists: null }],
      [2, { trainings: 0, goals: 0, assists: null }],
      [4, { trainings: 1, goals: 4, assists: null }],
      [5, { trainings: 6, goals: 2, assists: null }],
    ]),
  },
  {
    player: PLAYERS[21], // Уля
    statsByPeriod: new Map([[2, { trainings: 2, goals: 1, assists: null }]]),
  },
  {
    player: PLAYERS[22], // Вика Комратова
    statsByPeriod: new Map([
      [3, { trainings: 5, goals: 1, assists: null }],
      [4, { trainings: 6, goals: 0, assists: null }],
      [5, { trainings: 7, goals: 0, assists: null }],
      [6, { trainings: 7, goals: 0, assists: null }],
      [7, { trainings: 5, goals: 0, assists: 1 }],
      [8, { trainings: 6, goals: 0, assists: 3 }],
      [9, { trainings: 5, goals: 3, assists: 1 }],
    ]),
  },
  {
    player: PLAYERS[23], // Татьяна (мама Вики)
    statsByPeriod: new Map([[4, { trainings: 1, goals: 1, assists: null }]]),
  },
  {
    player: PLAYERS[24], // Лиза
    statsByPeriod: new Map([
      [5, { trainings: 2, goals: 1, assists: null }],
      [6, { trainings: 1, goals: 2, assists: null }],
      [7, { trainings: 3, goals: 4, assists: 2 }],
      [8, { trainings: 1, goals: 0, assists: 1 }],
    ]),
  },
  {
    player: PLAYERS[25], // Оля
    statsByPeriod: new Map([
      [5, { trainings: 1, goals: 0, assists: null }],
      [6, { trainings: 2, goals: 1, assists: null }],
      [7, { trainings: 2, goals: 0, assists: 0 }],
    ]),
  },
  {
    player: PLAYERS[26], // Наташа
    statsByPeriod: new Map([[8, { trainings: 3, goals: 1, assists: 0 }]]),
  },
  {
    player: PLAYERS[27], // Маша
    statsByPeriod: new Map([[8, { trainings: 2, goals: 2, assists: 1 }]]),
  },
  {
    player: PLAYERS[28], // Лена
    statsByPeriod: new Map([
      [8, { trainings: 3, goals: 0, assists: 0 }],
      [9, { trainings: 6, goals: 1, assists: 1 }],
    ]),
  },
  {
    player: PLAYERS[29], // Женя
    statsByPeriod: new Map([[9, { trainings: 2, goals: 0, assists: 1 }]]),
  },
];
