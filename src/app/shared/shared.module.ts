import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LogoComponent } from './logo/logo.component';
import { CardHotelComponent } from './card-hotel/card-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { HotelImagesGridComponent } from './hotel-images-grid/hotel-images-grid.component';

@NgModule({
  declarations: [SidebarClientComponent, LogoComponent, CardHotelComponent, UserBadgeComponent, HotelImagesGridComponent, SearchHotelComponent],
    exports: [SidebarClientComponent, LogoComponent, CardHotelComponent, UserBadgeComponent, SearchHotelComponent,  HotelImagesGridComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule]

})
export class SharedModule {}
