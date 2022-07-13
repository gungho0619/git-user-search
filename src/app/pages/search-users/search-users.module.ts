import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchUsersRoutingModule } from './search-users-routing.module';

import { SearchUsersComponent } from './search-users.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
  declarations: [SearchUsersComponent, SearchBarComponent, ResultTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LayoutModule,
    SharedModule,
    SearchUsersRoutingModule,
  ],
})
export class SearchUsersModule {}
