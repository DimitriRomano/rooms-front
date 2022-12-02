import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsInfoRoutingModule } from './layouts-info-routing.module';
import { InfoModule } from '../../features/info/info.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsInfoRoutingModule,
    InfoModule
  ]
})
export class LayoutsInfoModule { }
