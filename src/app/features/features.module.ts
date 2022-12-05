import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReservationModule } from './reservation/reservation.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule, SharedModule, ReservationModule],
  exports: [AngularMaterialModule, SharedModule, ReservationModule]
})
export class FeaturesModule {}
