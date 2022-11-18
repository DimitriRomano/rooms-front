import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [SidebarClientComponent, LogoComponent],
  exports: [SidebarClientComponent, LogoComponent],
  imports: [CommonModule, AngularMaterialModule]
})
export class SharedModule {}
