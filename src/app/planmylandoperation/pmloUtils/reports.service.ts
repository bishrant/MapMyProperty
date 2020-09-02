import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private backendServer = 'https://localhost:44358/';
  private apiDomain = this.backendServer + 'api/';
  private smzReportUrl = this.apiDomain + 'CreateSensAreasReport';

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
