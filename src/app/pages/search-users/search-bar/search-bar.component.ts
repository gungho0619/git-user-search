import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  ngOnInit(): void {}

  submit() {
    this.search.emit(this.form.value.keyword || '');
  }
}
