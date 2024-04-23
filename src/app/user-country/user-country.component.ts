import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryRestApiService } from '../country-rest-api.service';

@Component({
  selector: 'app-user-country',
  templateUrl: './user-country.component.html',
  styleUrls: ['./user-country.component.css']
})
export class UserCountryComponent implements OnInit {

  ipAddress: string | null = null;
  countryInfo: any;
  countryName: any | null = null;
  error: string | null = null;

  constructor(private http: HttpClient, private countryListService: CountryRestApiService) { }

  ngOnInit(): void {
    this.getUserIPAddress();

  }

  getUserIPAddress() {
    this.http.get('https://api.ipify.org?format=json').subscribe(
      (data: any) => {
        this.ipAddress = data.ip;
        this.fetchCountryInfo();
      },
      (error) => {
        this.error = 'Failed to get IP address.';
        console.error('Failed to get IP address:', error);
      }
    );
  }

  fetchCountryInfo() {
    if (this.ipAddress) {
      this.http.get(`https://api.country.is/${this.ipAddress}`).subscribe(
        (data: any) => {
          this.countryInfo = data;

          const countryCode = this.countryInfo.country; 
          console.log(countryCode)
          this.countryListService.getCountryNameByCode(countryCode).subscribe(
            response => {
              this.countryName = response;
              console.log('Country Name:', this.countryName[0].name.common);
            },
            error => console.log(error)
          );
        },
        (error) => {
          this.error = 'Failed to fetch country information.';
          console.error('Failed to fetch country information:', error);
        }
      );
    }
  }
}
