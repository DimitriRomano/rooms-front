import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [CommonModule, LayoutsRoutingModule, SharedModule, AngularMaterialModule]
})
export class LayoutsModule {}
