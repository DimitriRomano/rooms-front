/* tslint:disable */
/* eslint-disable */
import { AuthModel } from './auth-model';
import { RoomModel } from './room-model';
export interface BookingModel {
  Auth: null | AuthModel;
  authId: null | number;
  checkIn: string;
  checkOut: string;
  createdAt: string;
  id: number;
  nbPerson: number;
  room: null | RoomModel;
  roomId: null | number;
  status: 'PENDING' | 'CONFIRMED' | 'REFUSED' | 'CANCELED' | 'ENDED';
  updatedAt: string;
}
