import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  URL_BASE = 'http://api.apixu.com/v1/';

  constructor(private httpClient: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.httpClient.get(
      this.URL_BASE + 'current.json?key=8c3c7daa94234a59bd7140955182012&q=' + city
    );
  }
}
