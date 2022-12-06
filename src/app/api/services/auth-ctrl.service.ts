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

import { AuthCreation } from '../models/auth-creation';
import { AuthFind } from '../models/auth-find';
import { AuthFind } from '../models/auth-find';
import { AuthModel } from '../models/auth-model';
import { AuthUpdate } from '../models/auth-update';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authCtrlLogin
   */
  static readonly AuthCtrlLoginPath = '/rest/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlLogin$Response(params?: {
    context?: HttpContext
    body?: Credentials
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlLoginPath, 'post');
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
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlLogin(params?: {
    context?: HttpContext
    body?: Credentials
  }
): Observable<AuthModel> {

    return this.authCtrlLogin$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

  /**
   * Path part for operation authCtrlSignup
   */
  static readonly AuthCtrlSignupPath = '/rest/auth/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlSignup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlSignup$Response(params?: {
    context?: HttpContext
    body?: AuthCreation
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlSignupPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `authCtrlSignup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlSignup(params?: {
    context?: HttpContext
    body?: AuthCreation
  }
): Observable<string> {

    return this.authCtrlSignup$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authCtrlLogout
   */
  static readonly AuthCtrlLogoutPath = '/rest/auth/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlLogout$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlLogoutPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `authCtrlLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlLogout(params?: {
    context?: HttpContext
  }
): Observable<string> {

    return this.authCtrlLogout$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authCtrlReset
   */
  static readonly AuthCtrlResetPath = '/rest/auth/reset';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlReset()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlReset$Response(params?: {
    context?: HttpContext
    body?: {
'newPassword'?: string;
}
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlResetPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `authCtrlReset$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlReset(params?: {
    context?: HttpContext
    body?: {
'newPassword'?: string;
}
  }
): Observable<string> {

    return this.authCtrlReset$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authCtrlAuthInfo
   */
  static readonly AuthCtrlAuthInfoPath = '/rest/auth/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlAuthInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlAuthInfo$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlAuthInfoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlAuthInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlAuthInfo(params?: {
    context?: HttpContext
  }
): Observable<AuthModel> {

    return this.authCtrlAuthInfo$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

  /**
   * Path part for operation authCtrlUpdateMe
   */
  static readonly AuthCtrlUpdateMePath = '/rest/auth/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlUpdateMe()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdateMe$Response(params?: {
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlUpdateMePath, 'patch');
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
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlUpdateMe$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdateMe(params?: {
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<AuthModel> {

    return this.authCtrlUpdateMe$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

  /**
   * Path part for operation authCtrlGetAll
   */
  static readonly AuthCtrlGetAllPath = '/rest/auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: AuthFind
  }
): Observable<StrictHttpResponse<Array<AuthModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<AuthModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlGetAll(params?: {
    context?: HttpContext
    body?: AuthFind
  }
): Observable<Array<AuthModel>> {

    return this.authCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AuthModel>>) => r.body as Array<AuthModel>)
    );
  }

  /**
   * Path part for operation authCtrlGetOne
   */
  static readonly AuthCtrlGetOnePath = '/rest/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlGetOne()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlGetOne$Response(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlGetOne$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlGetOne(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<AuthModel> {

    return this.authCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

  /**
   * Path part for operation authCtrlDelete
   */
  static readonly AuthCtrlDeletePath = '/rest/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlDelete$Response(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `authCtrlDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlDelete(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<string> {

    return this.authCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authCtrlUpdate
   */
  static readonly AuthCtrlUpdatePath = '/rest/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlGetOne$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlGetOne(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<AuthModel> {

    return this.authCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

  /**
   * Path part for operation authCtrlDelete
   */
  static readonly AuthCtrlDeletePath = '/rest/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlDelete$Response(params: {
    id: string;
    context?: HttpContext
    body?: {
'id'?: number;
}
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `authCtrlDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<string> {

    return this.authCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authCtrlUpdate
   */
  static readonly AuthCtrlUpdatePath = '/rest/auth/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<StrictHttpResponse<AuthModel>> {

    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<AuthModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: AuthUpdate
  }
): Observable<AuthModel> {

    return this.authCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel)
    );
  }

}
>>>>>>> reservation+auth
