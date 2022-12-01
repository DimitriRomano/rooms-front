/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthCtrlService } from './services/auth-ctrl.service';
import { FeatureCategoryCtrlService } from './services/feature-category-ctrl.service';
import { FeatureCtrlService } from './services/feature-ctrl.service';
import { HotelCtrlService } from './services/hotel-ctrl.service';
import { RoomCtrlService } from './services/room-ctrl.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthCtrlService,
    FeatureCategoryCtrlService,
    FeatureCtrlService,
    HotelCtrlService,
    RoomCtrlService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
