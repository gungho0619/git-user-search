import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchBarComponent } from './search-bar.component';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button and label of input box', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const searchBarComponent = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button span.font-medium')?.textContent).toContain('Submit');
    expect(compiled.querySelector('mat-label')?.textContent).toContain('Search by Login');
  });

  it('should send keyword when do submit', (done: DoneFn) => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const searchBarComponent = fixture.componentInstance;
    fixture.detectChanges();
    searchBarComponent.form.controls.keyword.setValue('webcat');

    searchBarComponent.search.asObservable().subscribe((res) => {
      expect(res).toContain('webcat');
      done();
    });

    searchBarComponent.submit();
  });
});
