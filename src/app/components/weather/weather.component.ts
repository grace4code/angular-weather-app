import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
@Component({
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data: Response | undefined;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private weatherService: WeatherService

  ) { }

  ngOnInit() {
    this.getWeather();

  }

  getWeather() {

    const cityName = this.route.snapshot.paramMap.get('name') ?? "";
    console.log(cityName);

    this.weatherService.getCityWiseWeather(cityName)
      .subscribe((response: any) => {

        this.data = response;
      });

  }
  goBack(): void {
    this.location.back();
  }

}
