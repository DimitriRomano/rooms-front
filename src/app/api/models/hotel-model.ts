/* tslint:disable */
/* eslint-disable */
import { AuthModel } from './auth-model';
import { FavoriteModel } from './favorite-model';
import { FeatureHotelModel } from './feature-hotel-model';
import { RoomModel } from './room-model';
export interface HotelModel {
  Auth: null | AuthModel;
  Favorite: Array<FavoriteModel>;
  FeatureHotel: Array<FeatureHotelModel>;
  address: string;
  authId: null | number;
  city: string;
  country: string;
  description: string;
  email: string;
  id: number;
  images: Array<string>;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  rooms: Array<RoomModel>;
  state: string;
  website: string;
  zip: string;
}
