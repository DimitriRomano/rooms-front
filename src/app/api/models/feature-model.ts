/* tslint:disable */
/* eslint-disable */
import { FeatureCategoryModel } from './feature-category-model';
import { FeatureHotelModel } from './feature-hotel-model';
import { FeatureRoomModel } from './feature-room-model';
export interface FeatureModel {
  FeatureCategory: null | FeatureCategoryModel;
  FeatureHotel: Array<FeatureHotelModel>;
  FeatureRoom: Array<FeatureRoomModel>;
  createdAt: string;
  featureCategoryId: null | number;
  icon: null | string;
  id: number;
  name: string;
  updatedAt: string;
}
