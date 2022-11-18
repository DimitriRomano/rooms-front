/* tslint:disable */
/* eslint-disable */
import { FeatureModel } from './feature-model';
import { RoomModel } from './room-model';
export interface FeatureRoomModel {
  createdAt: string;
  feature: FeatureModel;
  featureId: number;
  id: number;
  room: RoomModel;
  roomId: number;
  updatedAt: string;
}
