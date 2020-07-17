import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private backendServer = 'https://localhost:44328/';
  private apiDomain = this.backendServer + 'pmlo/';
  private smzReportUrl = this.apiDomain + 'GetSMZReport';

  private httpOptions = {
    responseType: 'text' as 'json'
  };

  constructor(
    private http: HttpClient
  ) { }

  getSMZReports(data : {content:string}): Observable<any>{
    const url = this.smzReportUrl;
    return this.http.post<any>(url, data);
  }
}
