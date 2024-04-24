import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryRestApiService {

  private apiUrl = 'https://restcountries.com/v3.1/';
  private countryCityAPIKey = 'ZUVHT2lEME5yaERiVmwyTVBoNHF0djduQnhOMkY1SllhN09Ga0NYUQ=='
  private countryCityUrl =  'https://api.countrystatecity.in/v1/countries/'
  private statesPath ='/states'
  private citiesPath ='/cities'
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
        console.log(response)
        return response.map(country => ({
          name: country.name.common,
          region: country.region,
          subregion: country.subregion,
          flag: country.flag,
        timezone: country.timezones[0],
        borders: country.borders,
        latlng: country.latlng,
        maps: country.maps.openStreetMaps,
        cca2: country.cca2
        }));
      })
    );
  }

  getCountryStates(countryCode: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-CSCAPI-KEY', this.countryCityAPIKey); 

    return this.http.get<any>(`${this.countryCityUrl}${countryCode}${this.statesPath}`,{ headers});
}

getCountryCities(countryCode: string, stateCode: string): Observable<any> {
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('X-CSCAPI-KEY', this.countryCityAPIKey); 

  return this.http.get<any>(`${this.countryCityUrl}${countryCode}${this.statesPath}/${stateCode}${this.citiesPath}`,{ headers});
}

  
}
