import { ElevationUnits } from './interfaces.d';
import Accessor  from "esri/core/Accessor";
import { property, subclass, } from "esri/core/accessorSupport/decorators";
import { ElevationProfileProperties } from "./interfaces";
import { CalculateLength, CalculateSlope, GetSegmentsWithHigherSlope, CalculateSegmentLength, lengthAbbrMap, elevationUnitMap, sum, max, min, Decimal, avg, } from "./Uitls";
import { CreateNormalElevationLine, CreateHigherSlopeLine, GetGraphOptions, ConvertElevationUnits, } from "./GraphStyles";
import Graphic from "esri/Graphic";
import MapView  from 'esri/views/MapView';
import PrintTemplate from 'esri/tasks/support/PrintTemplate';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import PrintTask  from 'esri/tasks/PrintTask';
import * as Plotly from './lib/plotly-basic-1.55.2.min.js';

@subclass("esri.widgets.ElevationProfileViewModel")
class ElevationProfileViewModel extends Accessor {
  constructor(props?: ElevationProfileProperties) {
    super();
  }

  @property()
  slopeThreshold: number | undefined;

  @property()
  plot: any;

  @property()
  userGraphic: Graphic;

  @property()
  showWidget: boolean = false;

  @property()
  ptArrayOriginal: any = [];

  @property()
  state: string = "";

  @property()
  unit: ElevationUnits = 'miles';

  @property()
  error: string = "";

  GetElevationData(graphic: Graphic) {
    let feat = graphic.toJSON();
    feat.atttributes = { OID: 1 };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("f", "json");
    urlencoded.append("returnZ", "true");
    urlencoded.append("DEMResolution", "FINEST");
    urlencoded.append("ProfileIDField", "ObjectID");
    //format
    let format = {
      fields: [{ name: "OID", type: "esriFieldTypeObjectID", alias: "OID" }],
      geometryType: "esriGeometryPolyline",
      features: [feat],
      sr: { wkid: 102100 },
    };
    urlencoded.append("InputLineFeatures", JSON.stringify(format));
    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    return fetch(
      "https://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer/Profile/execute",
      requestOptions
    );
  }

  getChartData(pts: any, unit: ElevationUnits) {
    pts = ConvertElevationUnits(pts, unit);
    pts = CalculateLength(pts, unit);
    pts = CalculateSlope(pts);

    let normalLine: any = CreateNormalElevationLine(pts, unit);
    var data: any;
    if (this.slopeThreshold && this.slopeThreshold > 0) {
      const higherSlope = GetSegmentsWithHigherSlope(pts, this.slopeThreshold);
      var higherSlopeLine = CreateHigherSlopeLine(higherSlope);

      data = [normalLine, higherSlopeLine] as any;
    } else {
      data = [normalLine] as any;
    }
    const options = GetGraphOptions(pts, unit);
    return [data, options, pts];
  }

  initializeHover(Plotly: any, _pts: any, mapView: __esri.MapView) {
    console.log(_pts);
    var myPlot: any = document.getElementById("myDiv");
    myPlot
      .on("plotly_hover", function (data: any) {
        const pId = data.points[0].pointIndex;
        const pt = _pts[pId];
        var point: any = {
          type: "point", // autocasts as new Point()
          x: pt[0],
          y: pt[1],
          spatialReference: { wkid: 102100 },
        };

        // Create a symbol for drawing the point
        var markerSymbol: any = {
          type: "simple-marker",
          style: "cross",
          color: "cyan",
        };

        // Create a graphic and add the geometry and symbol to it
        var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
        });
        mapView.graphics.removeAll();
        mapView.graphics.add(pointGraphic);
      })
      .on("plotly_unhover", function (data: any) {
        mapView.graphics.removeAll();
      });

  }
  GetStatistics() {
    let pts = JSON.parse(JSON.stringify(this.ptArrayOriginal));
    pts = ConvertElevationUnits(pts, this.unit);
    pts = CalculateLength(pts, this.unit);
    pts = CalculateSlope(pts);
    pts = CalculateSegmentLength(pts, this.unit);

    const unitAbbr = " " + lengthAbbrMap[this.unit];
    const elevAbbr = " " + lengthAbbrMap[elevationUnitMap[this.unit]];
    console.log(pts);
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
      TotalDistance: totalDistance + unitAbbr,
      MaximumSlope: max(slopes) + '%',
      MinimumSlope: min(slopes) + '%',
      MeanSlope: Decimal(avg(slopes)) + '%',
      SteepSlopes: sum(steepSlopes) + unitAbbr,
      ElevationRange: Math.abs(Decimal(max(elevation) - min(elevation))) + elevAbbr,
      MinimumElevation: Decimal(min(elevation)) + elevAbbr,
      MaximumElevation: Decimal(max(elevation)) + elevAbbr,
      TotalElevationGain: Decimal(elevationGain) + elevAbbr,
      TotalElevationLost: Decimal(elevationLoss) + elevAbbr,
    }
  }

  async printReport(mapView: MapView, reportURL: string) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const printTemplate = new PrintTemplate({
          format: 'jpg',
        });
        const printParameters = new PrintParameters({
          view: mapView,
          template: printTemplate,
          extraParameters: {
            Layout_Template: 'ProfileToolFeetTemplate',
            f: 'json'
          }
        })
        const printTask = new PrintTask({ url: 'https://tfsgis02.tfs.tamu.edu/arcgis/rest/services/Shared/ExportWebMap/GPServer/Export%20Web%20Map/execute' })
    
        const printURLData: any = await printTask.execute(printParameters);
        const _title = document.getElementById('elevationProfileTitle') as any;
        const img = await this.exportImage();
    
    
        var reportData = {
          title: _title.value,
          summaryStats: this.GetStatistics(),
          graphImage: (img as any).split("data:image/png;base64,")[1],
          mapLink: printURLData.url
        };
    
        console.log(reportData);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions: any = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(reportData),
          redirect: "follow",
        };
        const reportResponse: any = await fetch(reportURL, requestOptions).then((response: any) => response.json())
        const rr = reportResponse;
        console.log("Final link ", rr);

      } catch (error) {
        this.state = "error";
        this.error = error;
        console.error(error);
      }
    })

  }

  exportImage() {
    return new Promise((resolve: any, reject: any) => {
      var myPlot: any = document.getElementById('myDiv');
      Plotly.toImage(myPlot, { height: 400, width: 856 })
        .then(function (url: any) { resolve(url); })
        .catch((err: any) => reject(err))
    });
  }


}

export default ElevationProfileViewModel;