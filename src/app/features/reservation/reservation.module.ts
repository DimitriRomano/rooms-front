import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationDetailComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReservationRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule]
})
export class ReservationModule { }
