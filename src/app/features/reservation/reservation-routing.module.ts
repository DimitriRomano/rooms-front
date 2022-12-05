import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

const routes: Routes = [
  
  {path: ':id',
  component: ReservationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
