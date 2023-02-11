import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { CalComponent } from './cal/cal.component';
import { Cal2Component } from './cal2/cal2.component';


@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    CalComponent,
    Cal2Component
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
