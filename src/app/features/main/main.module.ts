import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListHotelComponent
  ],
  exports: [
    ListHotelComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})

export class MainModule {}
