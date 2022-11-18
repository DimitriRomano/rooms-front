/* tslint:disable */
/* eslint-disable */
import { HotelModel } from './hotel-model';
import { UserInformationModel } from './user-information-model';
export interface FavoriteModel {
  createdAt: string;
  hotel: HotelModel;
  hotelId: number;
  id: number;
  updatedAt: string;
  user: UserInformationModel;
  userId: number;
}
