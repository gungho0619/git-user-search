import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../layout/layout.module';
import { SearchUsersRoutingModule } from './search-users-routing.module';

import { SearchUsersComponent } from './search-users.component';

@NgModule({
  declarations: [SearchUsersComponent],
  imports: [CommonModule, LayoutModule, SearchUsersRoutingModule],
})
export class SearchUsersModule {}
