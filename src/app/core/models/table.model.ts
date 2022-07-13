import { SortDirection } from '@angular/material/sort';

export interface TableChange {
  direction: SortDirection;
  page: number;
}
