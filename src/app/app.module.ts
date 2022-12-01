import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatNativeDateModule, RippleGlobalOptions } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from "@angular/material/dialog";

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    LayoutsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule

  ],
  providers: [{ provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }, MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
