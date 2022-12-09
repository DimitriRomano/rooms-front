import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { ListHotelComponent } from './list-hotel/list-hotel.component';

@NgModule({
  declarations: [ListHotelComponent],
  exports: [ListHotelComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, MatFormFieldModule, MatInputModule],
  providers: []
})
export class MainModule {}
