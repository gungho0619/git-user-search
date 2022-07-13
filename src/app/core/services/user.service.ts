import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SearchResult } from '../models/http.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  search(login: string, page = 1, direction: SortDirection = 'asc', perPage = 9): Observable<SearchResult<User>> {
    const url = `${environment.api}/search/users`;
    let params = new HttpParams().append('q', `${login} in:login`).append('per_page', perPage).append('page', page);
    if (direction) {
      // TODO: User search api sort seems like not available...
      //  https://stackoverflow.com/questions/57535212/how-to-sort-the-github-user-api-alphabetically
      //  https://docs.github.com/en/search-github/searching-on-github/searching-users
      params = params.append('sort', 'login').append('order', direction);
    }
    return this.http.get<SearchResult<User>>(url, { params });
  }
}
