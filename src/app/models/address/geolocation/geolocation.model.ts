export interface GeolocationModel {
  lat: string,
  lng: string
}

export class Geolocation implements GeolocationModel {
  lat = '';
  lng = '';

  constructor(geoDTO ?: GeolocationModel) {
    if (!geoDTO) {
      return;
    }
    this.lat = geoDTO.lat;
    this.lng = geoDTO.lng;
  }

  static parseDto(geolocationResponse: GeolocationModel): Geolocation {
    if (!geolocationResponse) {
      return new Geolocation();
    }
    return new Geolocation({
      lat: geolocationResponse.lat ? geolocationResponse.lat : '',
      lng: geolocationResponse.lng ? geolocationResponse.lng : ''
    });
  }
}
