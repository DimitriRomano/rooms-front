/* tslint:disable */
/* eslint-disable */
export interface HotelCreation {

  /**
   * Hotel address
   */
  address: string;

  /**
   * Hotel Manager Account ID
   */
  authId: number;

  /**
   * Hotel city
   */
  city: string;

  /**
   * Hotel country
   */
  country: string;

  /**
   * Hotel description
   */
  description?: string;

  /**
   * Hotel email
   */
  email: string;

  /**
   * Hotel features IDs
   */
  featuresIds: Array<any>;

  /**
   * Hotel latitude
   */
  latitude: number;

  /**
   * Hotel longitude
   */
  longitude: number;

  /**
   * Hotel name
   */
  name: string;

  /**
   * Hotel phone number
   */
  phone?: string;

  /**
   * Hotel state/region/province
   */
  state: string;

  /**
   * Hotel website
   */
  website?: string;

  /**
   * Hotel zip/postal code
   */
  zip: string;
}
