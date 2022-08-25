import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiURL = 'https://api.open-meteo.com/v1/forecast';
  unidade? : string;
  tempo? : any;

  constructor(private http : HttpClient) {}
  
  ngOnInit(): void {
    this.consultarApi()
  }

  async consultarApi(){
    await this.http.get(`${ this.apiURL }`, { params: {
      latitude: 52.52,
      longitude: 13.41,
      hourly: [
        'temperature_2m', 
        'weathercode'
      ],
      daily: [
        'weathercode',
        'temperature_2m_max',
        'temperature_2m_min',
        'sunrise',
        'sunset',
        'precipitation_sum',
        'rain_sum',
        'windspeed_10m_max'
      ],
      current_weather: true,
      timezone: "America/Sao_Paulo"
    } }).subscribe(resultado => {
      this.tempo = resultado
    });
  }

}
