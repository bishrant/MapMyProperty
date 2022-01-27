import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor (private http: HttpClient, private config: AppConfiguration) { }

  getSMZReports (data: { content: string }): Observable<any> {
    const url = this.config.backendURL + 'CreateSensAreasReport';
    return this.http.post<any>(url, data);
  }

  getSoilsReport (data: { content: string }): Observable<any> {
    const url = this.config.backendURL + 'CreatePMLOSoilsReport';
    return this.http.post<any>(url, data);
  }

  getOperationalConsiderationsReport (data: { content: string }): Observable<any> {
    const url = this.config.backendURL + 'CreateOpConsReport';
    return this.http.post<any>(url, data);
  }

  getPlotLayoutReport (data: { content: string }): Observable<any> {
    const url = this.config.backendURL + 'CreatePlotLayoutReport';
    return this.http.post<any>(url, data);
  }
}
