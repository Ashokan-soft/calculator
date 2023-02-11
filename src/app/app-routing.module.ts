import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalComponent } from './cal/cal.component';
import { Cal2Component } from './cal2/cal2.component';
import { TryComponent } from './try/try.component';

const routes: Routes = [
  {path:'try',component:TryComponent},
  { path:'cal',component:CalComponent},
  {path:'cal2',component:Cal2Component},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
