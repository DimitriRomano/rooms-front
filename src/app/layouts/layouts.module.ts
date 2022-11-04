import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutsModule } from './guest-layout/guest-layouts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GuestLayoutsModule],
  exports: [GuestLayoutsModule]
})
export class LayoutsModule {}
