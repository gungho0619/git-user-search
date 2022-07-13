import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

import { UserService } from './user.service';
import { mockSearchResponse } from '../../mocks/search-response.mock';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api with valid query built with login and page', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({ ...mockSearchResponse }));

    const params = new HttpParams()
      .append('q', `username in:login`)
      .append('per_page', 9)
      .append('page', 3)
      .append('sort', 'login')
      .append('order', 'desc');

    service.search('username', 3, 'desc').subscribe(() => {
      expect(httpClientSpy.get).toHaveBeenCalledWith('https://api.github.com/search/users', { params });
      done();
    });
  });
});
