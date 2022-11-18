import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LogoComponent } from './logo/logo.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';

@NgModule({
  declarations: [SidebarClientComponent, LogoComponent, CardHotelComponent],
  exports: [SidebarClientComponent, LogoComponent, CardHotelComponent],
  imports: [CommonModule, AngularMaterialModule]
})
export class SharedModule {}
