import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SearchResult } from '../models/http.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  search(login: string): Observable<SearchResult<User>> {
    const url = `${environment.api}/search/users`;
    const params = new HttpParams().append('q', `${login} in:login`);
    return this.http.get<SearchResult<User>>(url, { params });
  }
}
