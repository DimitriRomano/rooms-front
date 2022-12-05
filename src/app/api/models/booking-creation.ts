/* tslint:disable */
/* eslint-disable */
export interface BookingCreation {

  /**
   * Booking user ID
   */
  authId: number;

  /**
   * Booking start date
   */
  checkIn?: string;

  /**
   * Booking end date
   */
  checkOut?: string;

  /**
   * Booking user ID
   */
  nbPersons: number;

  /**
   * Booking room ID
   */
  roomId: number;
}
