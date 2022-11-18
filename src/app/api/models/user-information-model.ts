/* tslint:disable */
/* eslint-disable */
import { AuthModel } from './auth-model';
import { BookingModel } from './booking-model';
import { FavoriteModel } from './favorite-model';
export interface UserInformationModel {
  Favorite: Array<FavoriteModel>;
  auth: AuthModel;
  authId: number;
  bookings: Array<BookingModel>;
  firstName: string;
  id: number;
  image: null | string;
  lastName: string;
}
