import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ireport } from './ireport';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = ""
  constructor (
    private http: HttpClient
    
  ) {} 

  getReport(localName: any, dateFrom: any, dateTo: any) {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.get<Ireport>( this.urlBase + "/api/report/GetReport?local="+ localName + "&dateFrom=" +dateFrom + "&dateTo=" +  dateTo).toPromise();
  };
}