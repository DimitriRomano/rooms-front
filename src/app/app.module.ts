import {forwardRef, NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatNativeDateModule, RippleGlobalOptions } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from "@angular/material/dialog";
import {ApiInterceptor} from "../api.interceptor";

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
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
    MatDialogModule,
    HttpClientModule

  ],
  providers: [{ provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }, MatDatepickerModule, MatNativeDateModule,      ApiInterceptor, API_INTERCEPTOR_PROVIDER,],
  bootstrap: [AppComponent]
})
export class AppModule {}
