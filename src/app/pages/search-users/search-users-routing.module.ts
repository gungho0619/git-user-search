import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchUsersComponent } from './search-users.component';
import { LayoutComponent } from '../../layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [{ path: '', component: SearchUsersComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchUsersRoutingModule {}
