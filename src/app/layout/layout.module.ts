import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
