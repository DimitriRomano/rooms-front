import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HotelInfoComponent],
  imports: [CommonModule, SharedModule, AngularMaterialModule, ReactiveFormsModule, AuthModule],
  exports: [HotelInfoComponent, AuthModule]
})
export class InfoModule {}
