import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListHotelComponent } from './list-hotel/list-hotel.component';

@NgModule({
  declarations: [ListHotelComponent],
  exports: [ListHotelComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: []
})
export class MainModule {}
