import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchUsersModule } from './pages/search-users/search-users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // Import SearchUsersModule because it is very first page loaded when the app bootstrapped. Otherwise, this should be lazy loaded...
    SearchUsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
