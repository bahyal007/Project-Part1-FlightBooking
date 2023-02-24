import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent {
  public info: FlightInformation[] = [];
  baseUrl = 'https://localhost:7078/'

  constructor(http: HttpClient){
    http.get<FlightInformation[]>(this.baseUrl + 'api/flight').subscribe(result => {
      this.info = result;
    }, error => console.error(error));
  }
}


interface FlightInformation { 
  flightRoute : string;
  flightStatus : string;
}
