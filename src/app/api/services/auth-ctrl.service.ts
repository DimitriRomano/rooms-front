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
import { AuthModel } from '../models/auth-model';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthCtrlService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
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
    context?: HttpContext;
    body?: Credentials;
  }): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: '*/*',
          context: params?.context
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<string>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlLogin(params?: { context?: HttpContext; body?: Credentials }): Observable<string> {
    return this.authCtrlLogin$Response(params).pipe(map((r: StrictHttpResponse<string>) => r.body as string));
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
    context?: HttpContext;
    body?: AuthCreation;
  }): Observable<StrictHttpResponse<AuthModel>> {
    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlSignupPath, 'post');
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
          return r as StrictHttpResponse<AuthModel>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlSignup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authCtrlSignup(params?: { context?: HttpContext; body?: AuthCreation }): Observable<AuthModel> {
    return this.authCtrlSignup$Response(params).pipe(map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel));
  }

  /**
   * Path part for operation authCtrlAuthInfo
   */
  static readonly AuthCtrlAuthInfoPath = '/rest/auth/authInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authCtrlAuthInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlAuthInfo$Response(params?: { context?: HttpContext }): Observable<StrictHttpResponse<AuthModel>> {
    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlAuthInfoPath, 'post');
    if (params) {
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
  authCtrlAuthInfo(params?: { context?: HttpContext }): Observable<AuthModel> {
    return this.authCtrlAuthInfo$Response(params).pipe(map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel));
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
  authCtrlLogout$Response(params?: { context?: HttpContext }): Observable<StrictHttpResponse<AuthModel>> {
    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlLogoutPath, 'post');
    if (params) {
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
          return r as StrictHttpResponse<AuthModel>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authCtrlLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authCtrlLogout(params?: { context?: HttpContext }): Observable<AuthModel> {
    return this.authCtrlLogout$Response(params).pipe(map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel));
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
    context?: HttpContext;
    body?: {
      newPassword?: string;
    };
  }): Observable<StrictHttpResponse<AuthModel>> {
    const rb = new RequestBuilder(this.rootUrl, AuthCtrlService.AuthCtrlResetPath, 'post');
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
          return r as StrictHttpResponse<AuthModel>;
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
    context?: HttpContext;
    body?: {
      newPassword?: string;
    };
  }): Observable<AuthModel> {
    return this.authCtrlReset$Response(params).pipe(map((r: StrictHttpResponse<AuthModel>) => r.body as AuthModel));
  }
}
