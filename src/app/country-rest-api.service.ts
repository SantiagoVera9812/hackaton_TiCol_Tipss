import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryRestApiService {

  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  getCountryNameByCode(code: string): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}alpha/${code}`).pipe(
      tap(response => console.log(response[0].name.common)), 
      map(response => response)
    );
  }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}all`).pipe(
      map(response => {
        
        return response.map(country => ({
          name: country.name.common,
          region: country.region,
          subregion: country.subregion,
          flag: country.flag,
        timezone: country.timezones[0],
        borders: country.borders,
        latlng: country.latlng,
        maps: country.maps.openStreetMaps
        }));
      })
    );
  }
  
}
