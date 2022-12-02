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

import { BookingCreation } from '../models/booking-creation';
import { BookingFind } from '../models/booking-find';
import { BookingModel } from '../models/booking-model';
import { BookingUpdate } from '../models/booking-update';

@Injectable({
  providedIn: 'root',
})
export class BookingCtrlService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation bookingCtrlCreate
   */
  static readonly BookingCtrlCreatePath = '/rest/bookings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bookingCtrlCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlCreate$Response(params?: {
    context?: HttpContext
    body?: BookingCreation
  }
): Observable<StrictHttpResponse<BookingModel>> {

    const rb = new RequestBuilder(this.rootUrl, BookingCtrlService.BookingCtrlCreatePath, 'post');
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
        return r as StrictHttpResponse<BookingModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bookingCtrlCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlCreate(params?: {
    context?: HttpContext
    body?: BookingCreation
  }
): Observable<BookingModel> {

    return this.bookingCtrlCreate$Response(params).pipe(
      map((r: StrictHttpResponse<BookingModel>) => r.body as BookingModel)
    );
  }

  /**
   * Path part for operation bookingCtrlGetAll
   */
  static readonly BookingCtrlGetAllPath = '/rest/bookings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bookingCtrlGetAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlGetAll$Response(params?: {
    context?: HttpContext
    body?: BookingFind
  }
): Observable<StrictHttpResponse<Array<BookingModel>>> {

    const rb = new RequestBuilder(this.rootUrl, BookingCtrlService.BookingCtrlGetAllPath, 'patch');
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
        return r as StrictHttpResponse<Array<BookingModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bookingCtrlGetAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlGetAll(params?: {
    context?: HttpContext
    body?: BookingFind
  }
): Observable<Array<BookingModel>> {

    return this.bookingCtrlGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BookingModel>>) => r.body as Array<BookingModel>)
    );
  }

  /**
   * Path part for operation bookingCtrlGetOne
   */
  static readonly BookingCtrlGetOnePath = '/rest/bookings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bookingCtrlGetOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  bookingCtrlGetOne$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BookingModel>> {

    const rb = new RequestBuilder(this.rootUrl, BookingCtrlService.BookingCtrlGetOnePath, 'get');
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
        return r as StrictHttpResponse<BookingModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bookingCtrlGetOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bookingCtrlGetOne(params: {
    id: number;
    context?: HttpContext
  }
): Observable<BookingModel> {

    return this.bookingCtrlGetOne$Response(params).pipe(
      map((r: StrictHttpResponse<BookingModel>) => r.body as BookingModel)
    );
  }

  /**
   * Path part for operation bookingCtrlDelete
   */
  static readonly BookingCtrlDeletePath = '/rest/bookings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bookingCtrlDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  bookingCtrlDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BookingModel>> {

    const rb = new RequestBuilder(this.rootUrl, BookingCtrlService.BookingCtrlDeletePath, 'delete');
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
        return r as StrictHttpResponse<BookingModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bookingCtrlDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  bookingCtrlDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<BookingModel> {

    return this.bookingCtrlDelete$Response(params).pipe(
      map((r: StrictHttpResponse<BookingModel>) => r.body as BookingModel)
    );
  }

  /**
   * Path part for operation bookingCtrlUpdate
   */
  static readonly BookingCtrlUpdatePath = '/rest/bookings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `bookingCtrlUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlUpdate$Response(params: {
    id: number;
    context?: HttpContext
    body?: BookingUpdate
  }
): Observable<StrictHttpResponse<BookingModel>> {

    const rb = new RequestBuilder(this.rootUrl, BookingCtrlService.BookingCtrlUpdatePath, 'patch');
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
        return r as StrictHttpResponse<BookingModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `bookingCtrlUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  bookingCtrlUpdate(params: {
    id: number;
    context?: HttpContext
    body?: BookingUpdate
  }
): Observable<BookingModel> {

    return this.bookingCtrlUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<BookingModel>) => r.body as BookingModel)
    );
  }

}
