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

import { HotelCreation } from '../models/hotel-creation';
import { HotelFind } from '../models/hotel-find';
import { HotelModel } from '../models/hotel-model';
import { HotelUpdate } from '../models/hotel-update';

@Injectable({
  providedIn: 'root',
})
export class HotelCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation hotelCtrlCreate
   */
  static readonly HotelCtrlCreatePath = '/rest/hotels';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hotelCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: HotelCreation
  }
): Observable<StrictHttpResponse<HotelModel>> {

    const rb = new RequestBuilder(this.rootUrl, HotelCtrlService.HotelCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<HotelModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hotelCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlCreate(params?: {
    context?: HttpContext
    body?: HotelCreation
  }
): Observable<HotelModel> {

    return this.hotelCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<HotelModel>) => r.body as HotelModel)
    );
  }

  /**
   * Path part for operation hotelCtrlGetAll
   */
  static readonly HotelCtrlGetAllPath = '/rest/hotels';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hotelCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: HotelFind
  }
): Observable<StrictHttpResponse<Array<HotelModel>>> {

    const rb = new RequestBuilder(this.rootUrl, HotelCtrlService.HotelCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<HotelModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hotelCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlGetAll(params?: {
    context?: HttpContext
    body?: HotelFind
  }
): Observable<Array<HotelModel>> {

    return this.hotelCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HotelModel>>) => r.body as Array<HotelModel>)
    );
  }

  /**
   * Path part for operation hotelCtrlGetOne
   */
  static readonly HotelCtrlGetOnePath = '/rest/hotels/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hotelCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  hotelCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<HotelModel>> {

    const rb = new RequestBuilder(this.rootUrl, HotelCtrlService.HotelCtrlGetOnePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HotelModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hotelCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  hotelCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<HotelModel> {

    return this.hotelCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<HotelModel>) => r.body as HotelModel)
    );
  }

  /**
   * Path part for operation hotelCtrlDelete
   */
  static readonly HotelCtrlDeletePath = '/rest/hotels/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hotelCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  hotelCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, HotelCtrlService.HotelCtrlDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hotelCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  hotelCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<string> {

    return this.hotelCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation hotelCtrlUpdate
   */
  static readonly HotelCtrlUpdatePath = '/rest/hotels/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `hotelCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: HotelUpdate
  }
): Observable<StrictHttpResponse<HotelModel>> {

    const rb = new RequestBuilder(this.rootUrl, HotelCtrlService.HotelCtrlUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HotelModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `hotelCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  hotelCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: HotelUpdate
  }
): Observable<HotelModel> {

    return this.hotelCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<HotelModel>) => r.body as HotelModel)
    );
  }

}
