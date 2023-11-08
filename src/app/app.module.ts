import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from "./services/weather.service";

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    pathMatch: 'full'
  }
  , {
    path: 'weather/forecast/:name',
    component: WeatherComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
