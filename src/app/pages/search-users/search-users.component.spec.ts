import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { firstValueFrom, of } from 'rxjs';

import { SearchUsersComponent } from './search-users.component';
import { UserService } from '../../core/services/user.service';
import { mockSearchResponse } from '../../mocks/search-response.mock';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['search']);
  const service = new UserService(userServiceSpy);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, MatCardModule],
      declarations: [SearchUsersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit response when do fetch', (done: DoneFn) => {
    const fixture = TestBed.createComponent(SearchUsersComponent);
    const searchBarComponent = fixture.componentInstance;

    userServiceSpy.search.and.returnValue(of({ ...mockSearchResponse }));
    fixture.detectChanges();

    firstValueFrom(searchBarComponent.result$.asObservable()).then((res) => {
      expect(res.total_count).toEqual(mockSearchResponse.total_count);
      done();
    });

    searchBarComponent.search('webcat');
    searchBarComponent.changeTable({ direction: 'desc', page: 1 });
  });
});
