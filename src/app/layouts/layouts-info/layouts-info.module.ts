import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsInfoRoutingModule } from './layouts-info-routing.module';
import { InfoModule } from '../../features/info/info.module';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    LayoutsInfoRoutingModule,
    InfoModule
  ]
})
export class LayoutsInfoModule { }
