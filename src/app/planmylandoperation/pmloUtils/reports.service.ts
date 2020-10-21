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
  private soilsReportUrl = this.apiDomain + 'CreatePMLOSoilsReport';

  constructor(
    private http: HttpClient
  ) { }

  getSMZReports(data : {content:string}): Observable<any>{
    const url = this.smzReportUrl;
    return this.http.post<any>(url, data);
  }

  getSoilsReport(data : {content:string}): Observable<any>{
    const url = this.soilsReportUrl;
    return this.http.post<any>(url, data);
  }
}
