var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Accessor from "esri/core/Accessor";
import { property, subclass, } from "esri/core/accessorSupport/decorators";
import { CalculateLength, CalculateSlope, GetSegmentsWithHigherSlope, CalculateSegmentLength, lengthAbbrMap, elevationUnitMap, sum, max, min, Decimal, avg, } from "./Uitls";
import { CreateNormalElevationLine, CreateHigherSlopeLine, GetGraphOptions, ConvertElevationUnits, } from "./GraphStyles";
import Graphic from "esri/Graphic";
import PrintTemplate from 'esri/tasks/support/PrintTemplate';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import PrintTask from 'esri/tasks/PrintTask';
const Plotly = import("./plotly-basic-1.55.2.min.js")
var ElevationProfileViewModel = /** @class */ (function (_super) {
    __extends(ElevationProfileViewModel, _super);
    function ElevationProfileViewModel(props) {
        var _this = _super.call(this) || this;
        _this.showWidget = false;
        _this.ptArrayOriginal = [];
        _this.state = "";
        _this.unit = 'miles';
        _this.error = "";
        return _this;
    }
    ElevationProfileViewModel.prototype.GetElevationData = function (graphic) {
        var feat = graphic.toJSON();
        feat.atttributes = { OID: 1 };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("f", "json");
        urlencoded.append("returnZ", "true");
        urlencoded.append("DEMResolution", "FINEST");
        urlencoded.append("ProfileIDField", "ObjectID");
        //format
        var format = {
            fields: [{ name: "OID", type: "esriFieldTypeObjectID", alias: "OID" }],
            geometryType: "esriGeometryPolyline",
            features: [feat],
            sr: { wkid: 102100 },
        };
        urlencoded.append("InputLineFeatures", JSON.stringify(format));
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };
        return fetch("https://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer/Profile/execute", requestOptions);
    };
    ElevationProfileViewModel.prototype.getChartData = function (pts, unit) {
        pts = ConvertElevationUnits(pts, unit);
        pts = CalculateLength(pts, unit);
        pts = CalculateSlope(pts);
        var normalLine = CreateNormalElevationLine(pts, unit);
        var data;
        if (this.slopeThreshold && this.slopeThreshold > 0) {
            var higherSlope = GetSegmentsWithHigherSlope(pts, this.slopeThreshold);
            var higherSlopeLine = CreateHigherSlopeLine(higherSlope);
            data = [normalLine, higherSlopeLine];
        }
        else {
            data = [normalLine];
        }
        var options = GetGraphOptions(pts, unit);
        return [data, options, pts];
    };
    ElevationProfileViewModel.prototype.initializeHover = function (Plotly, _pts, mapView) {
        console.log(_pts);
        var myPlot = document.getElementById("myDiv");
        myPlot
            .on("plotly_hover", function (data) {
            var pId = data.points[0].pointIndex;
            var pt = _pts[pId];
            var point = {
                type: "point",
                x: pt[0],
                y: pt[1],
                spatialReference: { wkid: 102100 },
            };
            // Create a symbol for drawing the point
            var markerSymbol = {
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
            .on("plotly_unhover", function (data) {
            mapView.graphics.removeAll();
        });
    };
    ElevationProfileViewModel.prototype.GetStatistics = function () {
        var _this = this;
        var pts = JSON.parse(JSON.stringify(this.ptArrayOriginal));
        pts = ConvertElevationUnits(pts, this.unit);
        pts = CalculateLength(pts, this.unit);
        pts = CalculateSlope(pts);
        pts = CalculateSegmentLength(pts, this.unit);
        var unitAbbr = " " + lengthAbbrMap[this.unit];
        var elevAbbr = " " + lengthAbbrMap[elevationUnitMap[this.unit]];
        console.log(pts);
        var totalDistance = pts[pts.length - 1][3];
        var slopes = pts.map(function (p) { return p[4]; });
        var steepSlopes = this.slopeThreshold ? pts.filter(function (s) { return s[4] > _this.slopeThreshold; }).map(function (p) { return p[5]; }) : [];
        var elevation = pts.map(function (p) { return p[2]; });
        var elvBase = elevation[0];
        var elevationDiff = elevation.map(function (p) { return (p - elvBase); });
        var elevationGain = sum(elevationDiff.filter(function (d) { return d > 0; }));
        var elevationLoss = sum(elevationDiff.filter(function (d) { return d < 0; }));
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
        };
    };
    ElevationProfileViewModel.prototype.printReport = function (mapView, reportURL) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var printTemplate, printParameters, printTask, printURLData, _title, img, reportData, myHeaders, requestOptions, reportResponse, rr, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 4, , 5]);
                                    printTemplate = new PrintTemplate({
                                        format: 'jpg',
                                    });
                                    printParameters = new PrintParameters({
                                        view: mapView,
                                        template: printTemplate,
                                        extraParameters: {
                                            Layout_Template: 'ProfileToolFeetTemplate',
                                            f: 'json'
                                        }
                                    });
                                    printTask = new PrintTask({ url: 'https://tfsgis02.tfs.tamu.edu/arcgis/rest/services/Shared/ExportWebMap/GPServer/Export%20Web%20Map/execute' });
                                    return [4 /*yield*/, printTask.execute(printParameters)];
                                case 1:
                                    printURLData = _a.sent();
                                    _title = document.getElementById('elevationProfileTitle');
                                    return [4 /*yield*/, this.exportImage()];
                                case 2:
                                    img = _a.sent();
                                    reportData = {
                                        title: _title.value,
                                        summaryStats: this.GetStatistics(),
                                        graphImage: img.split("data:image/png;base64,")[1],
                                        mapLink: printURLData.url
                                    };
                                    console.log(reportData);
                                    myHeaders = new Headers();
                                    myHeaders.append("Content-Type", "application/json");
                                    requestOptions = {
                                        method: "POST",
                                        headers: myHeaders,
                                        body: JSON.stringify(reportData),
                                        redirect: "follow",
                                    };
                                    return [4 /*yield*/, fetch(reportURL, requestOptions).then(function (response) { return response.json(); })];
                                case 3:
                                    reportResponse = _a.sent();
                                    rr = reportResponse;
                                    console.log("Final link ", rr);
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    this.state = "error";
                                    this.error = error_1;
                                    console.error(error_1);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ElevationProfileViewModel.prototype.exportImage = function () {
        return new Promise(function (resolve, reject) {
            var myPlot = document.getElementById('myDiv');
            Plotly.toImage(myPlot, { height: 400, width: 856 })
                .then(function (url) { resolve(url); })
                .catch(function (err) { return reject(err); });
        });
    };
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "slopeThreshold", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "plot", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "userGraphic", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "showWidget", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "ptArrayOriginal", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "state", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "unit", void 0);
    __decorate([
        property()
    ], ElevationProfileViewModel.prototype, "error", void 0);
    ElevationProfileViewModel = __decorate([
        subclass("esri.widgets.ElevationProfileViewModel")
    ], ElevationProfileViewModel);
    return ElevationProfileViewModel;
}(Accessor));
export default ElevationProfileViewModel;
