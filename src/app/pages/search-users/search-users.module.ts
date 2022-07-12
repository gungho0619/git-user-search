import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUsersRoutingModule } from './search-users-routing.module';
import { SearchUsersComponent } from './search-users.component';


@NgModule({
  declarations: [
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    SearchUsersRoutingModule
  ]
})
export class SearchUsersModule { }
