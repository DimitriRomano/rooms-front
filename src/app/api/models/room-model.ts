/* tslint:disable */
/* eslint-disable */
import { BookingModel } from './booking-model';
import { FeatureRoomModel } from './feature-room-model';
import { HotelModel } from './hotel-model';
import { ImageModel } from './image-model';
export interface RoomModel {
  FeatureRoom: Array<FeatureRoomModel>;
  bookings: Array<BookingModel>;
  description: string;
  hotel: HotelModel;
  hotelId: number;
  id: number;
  images: Array<ImageModel>;
  isAvailable: boolean;
  name: string;
  nbBed: number;
  price: number;
}
