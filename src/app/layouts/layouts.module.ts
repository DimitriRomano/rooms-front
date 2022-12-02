import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';
import { LayoutsMainComponent } from './layouts-main/layouts-main.component';
import { LayoutsInfoComponent } from './layouts-info/layouts-info.component';
import { InfoModule } from '../features/info/info.module';

@NgModule({
  declarations: [LayoutsComponent, LayoutsMainComponent, LayoutsInfoComponent],
  imports: [CommonModule, LayoutsRoutingModule, SharedModule, AngularMaterialModule, InfoModule]
})
export class LayoutsModule {}
