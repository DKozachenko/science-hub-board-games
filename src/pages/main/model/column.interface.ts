import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { PlayerRow } from './player-row.interface';

export interface Column {
  name: string;
  width: string;
  // Sort
  showSort: boolean;
  sortOrder: NzTableSortOrder | null;
  sortDirections: NzTableSortOrder[];
  sortFn: NzTableSortFn<PlayerRow> | null;
  // Filter
  showFilter: boolean;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<PlayerRow> | null;
  filterMultiple: boolean;
}
