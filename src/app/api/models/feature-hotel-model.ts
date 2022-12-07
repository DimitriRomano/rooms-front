/* tslint:disable */
/* eslint-disable */
import { FeatureModel } from './feature-model';
import { HotelModel } from './hotel-model';
export interface FeatureHotelModel {
  createdAt: string;
  feature: FeatureModel;
  featureId: number;
  hotel: HotelModel;
  hotelId: number;
  id: number;
  updatedAt: string;
}
