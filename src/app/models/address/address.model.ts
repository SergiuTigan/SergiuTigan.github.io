import { Geolocation } from './geolocation/geolocation.model';

export interface AddressModel {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geolocation
}

export class Address implements AddressModel {
  street = '';
  suite = '';
  city = '';
  zipcode = '';
  geo = new Geolocation();

  constructor(addressDto?: AddressModel) {
    if (!addressDto) {
      return;
    }
    this.street = addressDto.street;
    this.suite = addressDto.suite;
    this.city = addressDto.city;
    this.zipcode = addressDto.zipcode;
    this.geo = addressDto.geo;
  }

  static parseDto(addressResponse: AddressModel): Address {
    if (!addressResponse) {
      return new Address();
    }
    return new Address({
      city: addressResponse.city,
      geo: Geolocation.parseDto(addressResponse.geo),
      street: addressResponse.street,
      suite: addressResponse.suite,
      zipcode: addressResponse.zipcode
    });
  }
}
