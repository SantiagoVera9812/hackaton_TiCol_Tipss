import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AirportApiKeyService {


  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations';

  private tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
  private clientId = '6GDSkXgVcB9jzbrAroPZOxSzxHiQTf0H';
  private clientSecret = 'oiuORAcfTs0Gstc7';

  constructor(private http: HttpClient) { 
  }

  getToken(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');

    const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

    return this.http.post<any>(this.tokenUrl, body, { headers });
  }

  getAirports(keyword: string, countryCode: string, authToken: string): Observable<any> {
    const params = new HttpParams()
      .set('subType', 'AIRPORT')
      .set('keyword', keyword)
      .set('countryCode', countryCode)
      .set('page[limit]', '10')
      .set('page[offset]', '0')
      .set('sort', 'analytics.travelers.score')
      .set('view', 'FULL');

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`
      });

    return this.http.get<any>(this.apiUrl, { params, headers });
  }
}
