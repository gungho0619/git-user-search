import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup<{ keyword: FormControl<string | null> }> = this.fb.group({
    keyword: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.controls.keyword.valueChanges.pipe(debounceTime(300)).subscribe((value) => this.search.emit(value || ''));
  }
}
