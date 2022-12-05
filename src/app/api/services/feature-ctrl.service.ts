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

import { FeatureCreation } from '../models/feature-creation';
import { FeatureFind } from '../models/feature-find';
import { FeatureModel } from '../models/feature-model';
import { FeatureUpdate } from '../models/feature-update';

@Injectable({
  providedIn: 'root',
})
export class FeatureCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation featureCtrlCreate
   */
  static readonly FeatureCtrlCreatePath = '/rest/features';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: FeatureCreation
  }
): Observable<StrictHttpResponse<FeatureModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCtrlService.FeatureCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<FeatureModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlCreate(params?: {
    context?: HttpContext
    body?: FeatureCreation
  }
): Observable<FeatureModel> {

    return this.featureCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureModel>) => r.body as FeatureModel)
    );
  }

  /**
   * Path part for operation featureCtrlGetAll
   */
  static readonly FeatureCtrlGetAllPath = '/rest/features';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: FeatureFind
  }
): Observable<StrictHttpResponse<Array<FeatureModel>>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCtrlService.FeatureCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<FeatureModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlGetAll(params?: {
    context?: HttpContext
    body?: FeatureFind
  }
): Observable<Array<FeatureModel>> {

    return this.featureCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FeatureModel>>) => r.body as Array<FeatureModel>)
    );
  }

  /**
   * Path part for operation featureCtrlGetOne
   */
  static readonly FeatureCtrlGetOnePath = '/rest/features/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCtrlService.FeatureCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<FeatureModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureModel> {

    return this.featureCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureModel>) => r.body as FeatureModel)
    );
  }

  /**
   * Path part for operation featureCtrlDelete
   */
  static readonly FeatureCtrlDeletePath = '/rest/features/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FeatureModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCtrlService.FeatureCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<FeatureModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  featureCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<FeatureModel> {

    return this.featureCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureModel>) => r.body as FeatureModel)
    );
  }

  /**
   * Path part for operation featureCtrlUpdate
   */
  static readonly FeatureCtrlUpdatePath = '/rest/features/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `featureCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: FeatureUpdate
  }
): Observable<StrictHttpResponse<FeatureModel>> {

    const rb = new RequestBuilder(this.rootUrl, FeatureCtrlService.FeatureCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<FeatureModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `featureCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  featureCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: FeatureUpdate
  }
): Observable<FeatureModel> {

    return this.featureCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<FeatureModel>) => r.body as FeatureModel)
    );
  }

}
