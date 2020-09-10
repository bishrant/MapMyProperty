import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoilsService {

  private ssurgoTabularUrl = 'https://SDMDataAccess.sc.egov.usda.gov/Tabular/post.rest';

  constructor(
    private http: HttpClient
  ) { }

  identifySoil(mapView: __esri.MapView, mapPoint: __esri.Point, origin: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      const queryFile:string = 'assets/soilQueries/' + origin + 'SoilQuery.txt';

      this.http.get(queryFile, { responseType: 'text' as 'json' }).subscribe(data => {
        const queryString = data.toString().replace('zzLon', mapPoint.longitude.toString()).replace('zzLat', mapPoint.latitude.toString());
        console.log(queryString);
        try {
          this.http.post(this.ssurgoTabularUrl, {
            query: queryString,
            format: 'json'
        }).subscribe(response => {
          resolve(response);
        });
        } catch (e) {
          reject(e);
        }
      })
    });
  }
}
