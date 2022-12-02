/* tslint:disable */
/* eslint-disable */
import { AuthModel } from './auth-model';
import { HotelModel } from './hotel-model';
export interface FavoriteModel {
  Auth: null | AuthModel;
  authId: null | number;
  createdAt: string;
  hotel: HotelModel;
  hotelId: number;
  id: number;
  updatedAt: string;
}
