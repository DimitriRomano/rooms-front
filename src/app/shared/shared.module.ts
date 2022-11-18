import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LogoComponent } from './logo/logo.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarClientComponent, LogoComponent, CardHotelComponent, SearchHotelComponent],
  exports: [SidebarClientComponent, LogoComponent, CardHotelComponent, SearchHotelComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule,]
})
export class SharedModule {}
