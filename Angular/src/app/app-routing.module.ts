import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Gate1Component} from "./gate1/gate1.component";
import {Routes, RouterModule} from "@angular/router";
import {Gate2Component} from "./gate2/gate2.component";
import {TicketComponent} from "./ticket/ticket.component";
import {AdministracjaComponent} from "./administracja/administracja.component";
import {WyjazdComponent} from "./wyjazd/wyjazd.component";

const routes: Routes = [
  {
    path:'gate1',
    component:Gate1Component
  },
  {
    path:'gate2',
    component:Gate2Component
  },
  {
    path:'ticket',
    component:TicketComponent
  },
  {
    path:'admin',
    component:AdministracjaComponent
  },
  {
    path:'wyjazd',
    component:WyjazdComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
