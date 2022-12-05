import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJzdWIiOjEsImV4cCI6MTY2OTk4MjA5MjAwMiwiaWF0IjoxNjY5OTc4NDkyMDAyfQ.iXf40hadKYVynpIrgg8C9xVHuwAMbbpRHFISUttq4P8'
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.bearerToken}`,
      }
    });

    // Also handle errors globally
    return next
      .handle(req)
      .pipe // TODO handle errors
      ();
  }
}
