/* tslint:disable */
/* eslint-disable */
import { HotelModel } from './hotel-model';
import { RoomModel } from './room-model';
export interface ImageModel {
  Hotel: null | HotelModel;
  Room: null | RoomModel;
  createdAt: string;
  hotelId: null | number;
  id: number;
  roomId: null | number;
  updatedAt: string;
  url: string;
}
