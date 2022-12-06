import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { InfoModule } from '../features/info/info.module';
import { MainModule } from '../features/main/main.module';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LayoutsInfoComponent } from './layouts-info/layouts-info.component';
import { LayoutsMainComponent } from './layouts-main/layouts-main.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [LayoutsComponent, LayoutsMainComponent, LayoutsInfoComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
    AngularMaterialModule,
    MainModule,
    ReactiveFormsModule,
    InfoModule
  ]
})
export class LayoutsModule {}
