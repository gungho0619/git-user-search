import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LayoutModule } from '../../layout/layout.module';
import { SearchUsersRoutingModule } from './search-users-routing.module';

import { SearchUsersComponent } from './search-users.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [SearchUsersComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    SearchUsersRoutingModule,
  ],
})
export class SearchUsersModule {}
