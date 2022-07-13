import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort, SortDirection } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';

import { User } from '../../../core/models/user.model';
import { SearchResult } from '../../../core/models/http.model';
import { TableChange } from '../../../core/models/table.model';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit, OnDestroy {
  @Input() result$: Subject<SearchResult<User>>;
  @Input() reset$: Subject<any>;
  @Output() change: EventEmitter<TableChange> = new EventEmitter<TableChange>();

  total = 0;
  perPage = 9;

  page = 0;
  direction: SortDirection = 'asc';

  displayedColumns: string[] = ['avatar_url', 'login', 'type'];
  dataSource = new MatTableDataSource<User>([]);

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() {}

  ngOnInit(): void {
    if (this.result$) {
      this.result$
        .asObservable()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((res) => {
          this.dataSource.data = res.items;
          this.total = res.total_count;
        });
    }

    if (this.reset$) {
      this.reset$
        .asObservable()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe(() => {
          this.page = 0;
          this.direction = 'asc';
          this.total = 0;
          this.dataSource.data = [];
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  changeSort(sort: Sort) {
    this.direction = sort.direction;
    this.change.emit({ direction: this.direction, page: this.page + 1 });
  }

  changePage(page: PageEvent) {
    this.page = page.pageIndex;
    this.change.emit({ direction: this.direction, page: this.page + 1 });
  }
}
