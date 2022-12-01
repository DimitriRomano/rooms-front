/* tslint:disable */
/* eslint-disable */
import { BookingModel } from './booking-model';
import { FavoriteModel } from './favorite-model';
import { HotelModel } from './hotel-model';
export interface AuthModel {
  Favorite: Array<FavoriteModel>;
  bookings: Array<BookingModel>;
  createdAt: string;
  disabled: boolean;
  email: string;
  emailVerifiedAt: null | string;
  firstName: string;
  hotels: Array<HotelModel>;
  id: number;
  image: null | string;
  lastName: string;
  password: string;
  role: 'ADMIN' | 'HOTEL' | 'USER';
  token: null | string;
  updatedAt: string;
}
