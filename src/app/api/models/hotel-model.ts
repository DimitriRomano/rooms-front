/* tslint:disable */
/* eslint-disable */
import { FavoriteModel } from './favorite-model';
import { FeatureHotelModel } from './feature-hotel-model';
import { HotelAdminInformationModel } from './hotel-admin-information-model';
import { ImageModel } from './image-model';
import { RoomModel } from './room-model';
export interface HotelModel {
  Favorite: Array<FavoriteModel>;
  FeatureHotel: Array<FeatureHotelModel>;
  HotelAdminInformation: null | HotelAdminInformationModel;
  address: string;
  city: string;
  country: string;
  description: string;
  email: string;
  hotelAdminInformationId: null | number;
  id: number;
  images: Array<ImageModel>;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  rooms: Array<RoomModel>;
  state: string;
  website: string;
  zip: string;
}
