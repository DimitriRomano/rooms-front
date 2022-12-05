/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FeatureHotelModel } from '../models/feature-hotel-model';

@Injectable({
  providedIn: 'root'
})
export class FeatureHotelCtrlService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation featureHotelCtrlGetAll
   */
  static readonly FeatureHotelCtrlGetAllPath = '/rest/feature-hotels';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureHotelCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureHotelCtrlGetAll$Response(params?: {
    context?: HttpContext;
    body?: {};
  }): Observable<StrictHttpResponse<Array<FeatureHotelModel>>> {
    const rb = new RequestBuilder(this.rootUrl, FeatureHotelCtrlService.FeatureHotelCtrlGetAllPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: params?.context
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<FeatureHotelModel>>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureHotelCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureHotelCtrlGetAll(params?: { context?: HttpContext; body?: {} }): Observable<Array<FeatureHotelModel>> {
    return this.featureHotelCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FeatureHotelModel>>) => r.body as Array<FeatureHotelModel>)
    );
  }
}
