/* tslint:disable */
/* eslint-disable */
import { BookingModel } from './booking-model';
import { FeatureRoomModel } from './feature-room-model';
import { HotelModel } from './hotel-model';
export interface RoomModel {
  FeatureRoom: Array<FeatureRoomModel>;
  bookings: Array<BookingModel>;
  capacity: number;
  description: string;
  hotel: HotelModel;
  hotelId: number;
  id: number;
  images: Array<string>;
  isAvailable: boolean;
  name: string;
  nbBed: number;
  price: number;
}
