import { Component, OnInit } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, Subject } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { SearchResult } from '../../core/models/http.model';
import { TableChange } from '../../core/models/table.model';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent implements OnInit {
  isLoading = false;
  firstLoaded = false;
  result$: Subject<SearchResult<User>> = new Subject<SearchResult<User>>();
  reset$: Subject<any> = new Subject<any>();

  keyword: string;
  page: number;
  direction: SortDirection = 'asc';

  constructor(private userService: UserService, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  search(keyword: string) {
    this.keyword = keyword;
    this.firstLoaded = true;
    this.reset$.next(null);
    this.searchUsers();
  }

  changeTable(event: TableChange) {
    if (!this.firstLoaded) {
      return;
    }
    this.page = event.page;
    this.direction = event.direction;
    this.searchUsers();
  }

  private searchUsers() {
    this.isLoading = true;
    this.userService
      .search(this.keyword, this.page, this.direction)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res) => {
          this.result$.next(res);
        },
        error: (err) => {
          this.snack.open(err.error.message);
          this.reset$.next(null);
        },
      });
  }
}
