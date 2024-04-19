import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-country',
  templateUrl: './user-country.component.html',
  styleUrls: ['./user-country.component.css']
})
export class UserCountryComponent implements OnInit {

  ipAddress: string | null = null;
  countryInfo: any;
  error: string | null = null;

  constructor(private http: HttpClient) { }

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
        },
        (error) => {
          this.error = 'Failed to fetch country information.';
          console.error('Failed to fetch country information:', error);
        }
      );
    }
  }
}
