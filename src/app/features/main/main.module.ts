import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


@NgModule({
  declarations: [
    ListHotelComponent
  ],
  exports: [
    ListHotelComponent
  ],
  imports: [
    CommonModule, SharedModule, HttpClientModule
  ],
  providers: []
})

export class MainModule {}
