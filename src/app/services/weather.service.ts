import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCityList(): Observable<any> {
    const path = './assets/api/city.json';
    return this.httpClient.get(path)
      ;
  }

  getCityWiseWeather(cityName: string) {

    const path = `./assets/api/weather/forecast/${cityName}.json`

    return this.httpClient.get(path)
      ;
  }
}
