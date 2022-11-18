/* tslint:disable */
/* eslint-disable */
import { AuthModel } from './auth-model';
import { HotelModel } from './hotel-model';
export interface HotelAdminInformationModel {
  auth: AuthModel;
  authId: number;
  hotels: Array<HotelModel>;
  id: number;
}
