<<<<<<< HEAD
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:8083';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
=======
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:8083http://localhost:8083';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
>>>>>>> origin/reservation
