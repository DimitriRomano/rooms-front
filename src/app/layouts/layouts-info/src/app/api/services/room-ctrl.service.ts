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

import { RoomCreation } from '../models/room-creation';
import { RoomFind } from '../models/room-find';
import { RoomModel } from '../models/room-model';
import { RoomUpdate } from '../models/room-update';

@Injectable({
  providedIn: 'root',
})
export class RoomCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation roomCtrlCreate
   */
  static readonly RoomCtrlCreatePath = '/rest/rooms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: RoomCreation
  }
): Observable<StrictHttpResponse<RoomModel>> {

    const rb = new RequestBuilder(this.rootUrl, RoomCtrlService.RoomCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<RoomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlCreate(params?: {
    context?: HttpContext
    body?: RoomCreation
  }
): Observable<RoomModel> {

    return this.roomCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<RoomModel>) => r.body as RoomModel)
    );
  }

  /**
   * Path part for operation roomCtrlGetAll
   */
  static readonly RoomCtrlGetAllPath = '/rest/rooms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: RoomFind
  }
): Observable<StrictHttpResponse<Array<RoomModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RoomCtrlService.RoomCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<RoomModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlGetAll(params?: {
    context?: HttpContext
    body?: RoomFind
  }
): Observable<Array<RoomModel>> {

    return this.roomCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RoomModel>>) => r.body as Array<RoomModel>)
    );
  }

  /**
   * Path part for operation roomCtrlGetOne
   */
  static readonly RoomCtrlGetOnePath = '/rest/rooms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RoomModel>> {

    const rb = new RequestBuilder(this.rootUrl, RoomCtrlService.RoomCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<RoomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RoomModel> {

    return this.roomCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<RoomModel>) => r.body as RoomModel)
    );
  }

  /**
   * Path part for operation roomCtrlDelete
   */
  static readonly RoomCtrlDeletePath = '/rest/rooms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RoomModel>> {

    const rb = new RequestBuilder(this.rootUrl, RoomCtrlService.RoomCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<RoomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  roomCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RoomModel> {

    return this.roomCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<RoomModel>) => r.body as RoomModel)
    );
  }

  /**
   * Path part for operation roomCtrlUpdate
   */
  static readonly RoomCtrlUpdatePath = '/rest/rooms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `roomCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: RoomUpdate
  }
): Observable<StrictHttpResponse<RoomModel>> {

    const rb = new RequestBuilder(this.rootUrl, RoomCtrlService.RoomCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<RoomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `roomCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  roomCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: RoomUpdate
  }
): Observable<RoomModel> {

    return this.roomCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<RoomModel>) => r.body as RoomModel)
    );
  }

}
