/* tslint:disable */
/* eslint-disable */
import { AdminInformationModel } from './admin-information-model';
import { HotelAdminInformationModel } from './hotel-admin-information-model';
import { UserInformationModel } from './user-information-model';
export interface AuthModel {
  AdminInformation: null | AdminInformationModel;
  HotelAdminInformation: null | HotelAdminInformationModel;
  UserInformation: null | UserInformationModel;
  createdAt: string;
  disabled: boolean;
  email: string;
  emailVerifiedAt: null | string;
  id: number;
  password: string;
  role: 'ADMIN' | 'HOTEL' | 'USER';
  token: null | string;
  updatedAt: string;
}
