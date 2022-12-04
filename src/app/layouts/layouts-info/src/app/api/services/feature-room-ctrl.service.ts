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

import { FeatureRoomModel } from '../models/feature-room-model';

@Injectable({
  providedIn: 'root',
})
export class FeatureRoomCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation featureRoomCtrlGetAll
   */
  static readonly FeatureRoomCtrlGetAllPath = '/rest/feature-rooms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureRoomCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureRoomCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: {
}
  }
): Observable<StrictHttpResponse<Array<FeatureRoomModel>>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureRoomCtrlService.FeatureRoomCtrlGetAllPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FeatureRoomModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureRoomCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureRoomCtrlGetAll(params?: {
    context?: HttpContext
    body?: {
}
  }
): Observable<Array<FeatureRoomModel>> {

    return this.featureRoomCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FeatureRoomModel>>) => r.body as Array<FeatureRoomModel>)
    );
  }

}
