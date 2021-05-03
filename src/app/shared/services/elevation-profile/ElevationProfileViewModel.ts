import { ElevationUnits } from './interfaces.d';
import { CalculateLength, CalculateSlope, GetSegmentsWithHigherSlope, CalculateSegmentLength, lengthAbbrMap, elevationUnitMap, sum, max, min, Decimal, avg } from './Uitls';
import { CreateNormalElevationLine, CreateHigherSlopeLine, GetGraphOptions, ConvertElevationUnits } from './GraphStyles';
import Graphic from '@arcgis/core/Graphic';
import MapView from '@arcgis/core/views/MapView';
import { PrintTaskService } from '../PrintTask.service';

class ElevationProfileViewModel {
  constructor () {}

  slopeThreshold: number | undefined;
  plot: any;
  userGraphic: Graphic;
  showWidget: boolean = false;
  ptArrayOriginal: any = [];
  state: string = '';
  unit: ElevationUnits = 'miles';
  error: string = '';
  isMSL: boolean = false;
  divId: string = 'elevation-plotly';

  GetElevationData (graphic: Graphic, elevationGPServiceURL: string) {
    const feat = graphic.toJSON();
    feat.atttributes = { OID: 1 };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const urlencoded = new URLSearchParams();
    urlencoded.append('f', 'json');
    urlencoded.append('returnZ', 'true');
    urlencoded.append('DEMResolution', 'FINEST');
    urlencoded.append('ProfileIDField', 'ObjectID');
    // format
    const format = {
      fields: [{ name: 'OID', type: 'esriFieldTypeObjectID', alias: 'OID' }],
      geometryType: 'esriGeometryPolyline',
      features: [feat],
      sr: { wkid: 102100 }
    };
    urlencoded.append('InputLineFeatures', JSON.stringify(format));
    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    return fetch(elevationGPServiceURL, requestOptions);
  }

  getChartData (pts: any, unit: ElevationUnits) {
    pts = ConvertElevationUnits(pts, unit);
    pts = CalculateLength(pts, unit);
    pts = CalculateSlope(pts);

    const normalLine: any = CreateNormalElevationLine(pts, unit);
    let data: any;
    if (this.slopeThreshold && this.slopeThreshold > 0) {
      const higherSlope = GetSegmentsWithHigherSlope(pts, this.slopeThreshold);
      const higherSlopeLine = CreateHigherSlopeLine(higherSlope);

      data = [normalLine, higherSlopeLine] as any;
    } else {
      data = [normalLine] as any;
    }
    const options = GetGraphOptions(pts, unit, this.isMSL, this.divId);
    return [data, options, pts];
  }

  initializeHover (_pts: any, graphicsLayer: GraphicsLayer) {
    const myPlot: any = document.getElementById(this.divId);
    myPlot
      .on('plotly_hover', function (data: any) {
        try {
          const pId = data.points[0].pointIndex;
          const pt = _pts[pId];
          const point: any = {
            type: 'point', // autocasts as new Point()
            x: pt[0],
            y: pt[1],
            spatialReference: { wkid: 102100 }
          };

          // Create a symbol for drawing the point
          const markerSymbol: any = {
            type: 'simple-marker',
            style: 'cross',
            color: 'cyan',
            outline: { // autocasts as new SimpleLineSymbol()
              color: [0, 255, 255],
              width: '3px'
            }
          };

          // Create a graphic and add the geometry and symbol to it
          const pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol
          });
          graphicsLayer.removeAll();
          graphicsLayer.add(pointGraphic);
        } catch (error) { }
      })
      .on('plotly_unhover', function () {
        graphicsLayer.removeAll();
      });
  }

  GetStatistics () {
    let pts = JSON.parse(JSON.stringify(this.ptArrayOriginal));
    pts = ConvertElevationUnits(pts, this.unit);
    pts = CalculateLength(pts, this.unit);
    pts = CalculateSlope(pts);
    pts = CalculateSegmentLength(pts, this.unit);

    const unitAbbr = ' ' + lengthAbbrMap[this.unit];
    const elevAbbr = ' ' + lengthAbbrMap[elevationUnitMap[this.unit]];

    const totalDistance = pts[pts.length - 1][3];
    const slopes = pts.map((p: any) => p[4]);
    const steepSlopes = this.slopeThreshold ? pts.filter((s: any) => s[4] > this.slopeThreshold).map((p: any) => p[5]) : [];
    const elevation = pts.map((p: any) => p[2]);
    const elvBase = elevation[0];
    const elevationDiff = elevation.map((p: any) => (p - elvBase));

    const elevationGain = sum(elevationDiff.filter((d: any) => d > 0));
    const elevationLoss = sum(elevationDiff.filter((d: any) => d < 0));
    // gets the stats needed for PLMO report
    return {
      TotalDistance: Math.round(totalDistance) + unitAbbr,
      MaximumSlope: max(slopes) + '%',
      MinimumSlope: min(slopes) + '%',
      MeanSlope: Decimal(avg(slopes)) + '%',
      SteepSlopes: Decimal(sum(steepSlopes)) + unitAbbr,
      ElevationRange: Math.abs(Decimal(max(elevation) - min(elevation))) + elevAbbr,
      MinimumElevation: Decimal(min(elevation)) + elevAbbr,
      MaximumElevation: Decimal(max(elevation)) + elevAbbr,
      TotalElevationGain: Decimal(elevationGain) + elevAbbr,
      TotalElevationLost: Decimal(elevationLoss) + elevAbbr
    }
  }

  async printReport (plotly: any, mapView: MapView, reportURL: string, printTaskService: PrintTaskService, ext: any) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const mapImageUrl = await printTaskService.exportWebMap(mapView, 'ProfileToolFeetTemplate', 'png', ext);
        const _title = document.getElementById('elevationProfileTitle') as any;
        const img = await this.exportImage(plotly);

        const reportData = {
          title: _title.value,
          summaryStats: this.GetStatistics(),
          graphImage: (img as any).split('data:image/png;base64,')[1],
          mapLink: mapImageUrl
        };

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const requestOptions: any = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(reportData),
          redirect: 'follow'
        };
        const reportResponse: any = await fetch(reportURL, requestOptions).then((response: any) => response.json())
        resolve(reportResponse);
      } catch (error) {
        this.state = 'error';
        this.error = error;
        console.error(error);
        reject(error);
      }
    })
  }

  exportImage (plotly: any) {
    return new Promise((resolve: any, reject: any) => {
      const myPlot: any = document.getElementById(this.divId);
      plotly.toImage(myPlot, { height: 400, width: 856 })
        .then(function (url: any) { resolve(url); })
        .catch((err: any) => reject(err))
    });
  }
}

export default ElevationProfileViewModel;
