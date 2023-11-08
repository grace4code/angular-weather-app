import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  cityList: any = [];
  constructor(private myService: WeatherService, private router: Router) { }

  ngOnInit() {


    this.myService.getCityList()
      .subscribe((response: Response) => {

        this.cityList = response;
      });

  }

  getWeatherList(cityName: string) {

    const routePath = `weather/forecast`;
    this.router.navigate(
      [routePath, cityName]
    );

  }

}
