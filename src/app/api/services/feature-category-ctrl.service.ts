<<<<<<< HEAD
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

import { FeatureCategoryCreation } from '../models/feature-category-creation';
import { FeatureCategoryFind } from '../models/feature-category-find';
import { FeatureCategoryFind } from '../models/feature-category-find';
import { FeatureCategoryModel } from '../models/feature-category-model';
import { FeatureCategoryUpdate } from '../models/feature-category-update';

@Injectable({
  providedIn: 'root',
})
export class FeatureCategoryCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation featureCategoryCtrlCreate
   */
  static readonly FeatureCategoryCtrlCreatePath = '/rest/feature-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: FeatureCategoryCreation
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlCreate(params?: {
    context?: HttpContext
    body?: FeatureCategoryCreation
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlCreate
   */
  static readonly FeatureCategoryCtrlCreatePath = '/rest/feature-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: FeatureCategoryCreation
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlCreate(params?: {
    context?: HttpContext
    body?: FeatureCategoryCreation
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlGetOne
   */
  static readonly FeatureCategoryCtrlGetOnePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlDelete
   */
  static readonly FeatureCategoryCtrlDeletePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlUpdate
   */
  static readonly FeatureCategoryCtrlUpdatePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: FeatureCategoryUpdate
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: FeatureCategoryUpdate
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

}
=======
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

import { FeatureCategoryCreation } from '../models/feature-category-creation';
import { FeatureCategoryFind } from '../models/feature-category-find';
import { FeatureCategoryModel } from '../models/feature-category-model';
import { FeatureCategoryUpdate } from '../models/feature-category-update';

@Injectable({
  providedIn: 'root',
})
export class FeatureCategoryCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation featureCategoryCtrlGetAll
   */
  static readonly FeatureCategoryCtrlGetAllPath = '/rest/feature-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: FeatureCategoryFind
  }
): Observable<StrictHttpResponse<Array<FeatureCategoryModel>>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<FeatureCategoryModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlGetAll(params?: {
    context?: HttpContext
    body?: FeatureCategoryFind
  }
): Observable<Array<FeatureCategoryModel>> {

    return this.featureCategoryCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FeatureCategoryModel>>) => r.body as Array<FeatureCategoryModel>)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlGetAll
   */
  static readonly FeatureCategoryCtrlGetAllPath = '/rest/feature-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: FeatureCategoryFind
  }
): Observable<StrictHttpResponse<Array<FeatureCategoryModel>>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<FeatureCategoryModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlGetAll(params?: {
    context?: HttpContext
    body?: FeatureCategoryFind
  }
): Observable<Array<FeatureCategoryModel>> {

    return this.featureCategoryCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FeatureCategoryModel>>) => r.body as Array<FeatureCategoryModel>)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlGetOne
   */
  static readonly FeatureCategoryCtrlGetOnePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlDelete
   */
  static readonly FeatureCategoryCtrlDeletePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCategoryCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

  /**
   * Path part for operation featureCategoryCtrlUpdate
   */
  static readonly FeatureCategoryCtrlUpdatePath = '/rest/feature-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCategoryCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: FeatureCategoryUpdate
  }
): Observable<StrictHttpResponse<FeatureCategoryModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCategoryCtrlService.FeatureCategoryCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<FeatureCategoryModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCategoryCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCategoryCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: FeatureCategoryUpdate
  }
): Observable<FeatureCategoryModel> {

    return this.featureCategoryCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureCategoryModel>) => r.body as FeatureCategoryModel)
    );
  }

}
>>>>>>> reservation+auth
