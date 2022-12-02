/* tslint:disable */
/* eslint-disable */
export interface RoomCreation {

  /**
   * Room capacity
   */
  capacity: number;

  /**
   * Room description
   */
  description: string;

  /**
   * Room features IDs
   */
  featuresIds: Array<any>;

  /**
   * Room Hotel ID
   */
  hotelId: number;

  /**
   * Room images URLs
   */
  images: Array<any>;

  /**
   * Room name
   */
  name: string;

  /**
   * Room number of beds
   */
  nbBed: number;

  /**
   * Room price (in €uros)
   */
  price: number;
}
