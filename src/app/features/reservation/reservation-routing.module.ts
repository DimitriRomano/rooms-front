import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';

const routes: Routes = [
  {path: '',
  component: ReservationsListComponent},
  {path: ':id',
  component: ReservationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
