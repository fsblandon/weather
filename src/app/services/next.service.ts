import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NextService {

  URL_BASE = 'http://api.apixu.com/v1/';

  constructor(private httpClient: HttpClient) { }

  getPredition(city: string): Observable<any> {
    return this.httpClient.get(
      this.URL_BASE + 'forecast.json?key=8c3c7daa94234a59bd7140955182012&q=' + city + '&days=7'
    );
  }
}
