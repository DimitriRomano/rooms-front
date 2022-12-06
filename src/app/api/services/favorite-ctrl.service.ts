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

import { FavoriteCreation } from '../models/favorite-creation';
import { FavoriteFind } from '../models/favorite-find';
import { FavoriteModel } from '../models/favorite-model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation favoriteCtrlCreate
   */
  static readonly FavoriteCtrlCreatePath = '/rest/favorites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoriteCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoriteCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: FavoriteCreation
  }
): Observable<StrictHttpResponse<FavoriteModel>> {

    const rb = new RequestBuilder(this.rootUrl, FavoriteCtrlService.FavoriteCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<FavoriteModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `favoriteCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoriteCtrlCreate(params?: {
    context?: HttpContext
    body?: FavoriteCreation
  }
): Observable<FavoriteModel> {

    return this.favoriteCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<FavoriteModel>) => r.body as FavoriteModel)
    );
  }

  /**
   * Path part for operation favoriteCtrlGetAll
   */
  static readonly FavoriteCtrlGetAllPath = '/rest/favorites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoriteCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoriteCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: FavoriteFind
  }
): Observable<StrictHttpResponse<Array<FavoriteModel>>> {

    const rb = new RequestBuilder(this.rootUrl, FavoriteCtrlService.FavoriteCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<FavoriteModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `favoriteCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  favoriteCtrlGetAll(params?: {
    context?: HttpContext
    body?: FavoriteFind
  }
): Observable<Array<FavoriteModel>> {

    return this.favoriteCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FavoriteModel>>) => r.body as Array<FavoriteModel>)
    );
  }

  /**
   * Path part for operation favoriteCtrlGetOne
   */
  static readonly FavoriteCtrlGetOnePath = '/rest/favorites/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoriteCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoriteCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FavoriteModel>> {

    const rb = new RequestBuilder(this.rootUrl, FavoriteCtrlService.FavoriteCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<FavoriteModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `favoriteCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoriteCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FavoriteModel> {

    return this.favoriteCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<FavoriteModel>) => r.body as FavoriteModel)
    );
  }

  /**
   * Path part for operation favoriteCtrlDelete
   */
  static readonly FavoriteCtrlDeletePath = '/rest/favorites/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoriteCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoriteCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FavoriteModel>> {

    const rb = new RequestBuilder(this.rootUrl, FavoriteCtrlService.FavoriteCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<FavoriteModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `favoriteCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoriteCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FavoriteModel> {

    return this.favoriteCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<FavoriteModel>) => r.body as FavoriteModel)
    );
  }

}
