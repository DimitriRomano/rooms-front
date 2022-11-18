/* tslint:disable */
/* eslint-disable */
import { RoomModel } from './room-model';
import { UserInformationModel } from './user-information-model';
export interface BookingModel {
  checkIn: string;
  checkOut: string;
  createdAt: string;
  id: number;
  nbPerson: number;
  room: null | RoomModel;
  roomId: null | number;
  status: 'PENDING' | 'CONFIRMED' | 'REFUSED' | 'CANCELED' | 'ENDED';
  updatedAt: string;
  user: null | UserInformationModel;
  userId: null | number;
}
