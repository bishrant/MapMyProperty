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
import { subclass, property, aliasOf } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";
import SketchViewModel from "esri/widgets/Sketch/SketchViewModel";
import GraphicsLayer from "esri/layers/GraphicsLayer";
const Plotly = import("./plotly-basic-1.55.2.min.js")
// import * as Plotly from 'https://cdn.plot.ly/plotly-latest.min.js';
import { dt, Decimal } from "./Uitls";
import ElevationProfileViewModel from "./ElevationProfileViewModel";
import { CSS } from './resources';
import Widget from "esri/widgets/Widget";
var ElevationProfile = /** @class */ (function (_super) {
    __extends(ElevationProfile, _super);
    function ElevationProfile(props) {
        var _this = _super.call(this) || this;
        _this.reportURL = 'https://localhost:44358/api/CreateElevationProfileReport';
        _this.reveresed = false;
        _this.viewModel = new ElevationProfileViewModel();
        _this.mapView = props.mapView;
        _this.viewModel.unit = props.unit;
        _this.viewModel.slopeThreshold = props.slopeThreshold;
        return _this;
    }
    // <div class={this.classes(CSS.esriWidget, CSS.root, !this.showWidget ? CSS.chartHidden: null )}>
    ElevationProfile.prototype.render = function () {
        console.log(this.viewModel.state);
        // if (this.viewModel.state !== '') {
        //   console.log('need to destroy');
        //   const div = document.getElementById('myDiv') as any;
        //   if (div) {
        //     div.outerHTML = div.outerHTML;
        //     Plotly.purge('myDiv');
        //     this.viewModel.ptArrayOriginal = null;
        //   }
        // }
        var state = this.viewModel.state;
        return (tsx("div", { class: this.classes(CSS.esriWidget, CSS.root, !this.viewModel.showWidget ? CSS.chartHidden : null) },
            tsx("div", { id: "myDiv", class: this.classes({
                    'elevation-profile__chart': state !== 'idle',
                    'elevation-profile__hidden': state !== 'ready'
                }) }),
            tsx("div", null,
                tsx("div", null,
                    "  ",
                    this.viewModel.state === 'error' ? this._renderError(this.viewModel.error) : null),
                tsx("div", null,
                    " ",
                    this.viewModel.state === 'loading' ? this._renderLoader() : null),
                tsx("div", null,
                    " ",
                    this.viewModel.state === 'ready' ? this._renderElevationProfile() : null)),
            tsx("button", { bind: this, onclick: this.exit, class: CSS.close, title: "Close" },
                tsx("i", { class: 'fa fa-times', title: "Close" }))));
    };
    ElevationProfile.prototype.postInitialize = function () {
        this.initSketchVM();
    };
    ElevationProfile.prototype.createReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapView.goTo(this.sketchVM.layer.graphics)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.viewModel.printReport(this.mapView, this.reportURL)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ElevationProfile.prototype._renderLoader = function () {
        return (tsx("div", { class: this.classes(CSS.chart, CSS.loading) },
            tsx("div", null, "Loading"),
            tsx("img", { src: 'http://superstorefinder.net/support/wp-content/uploads/2018/01/blue_loading.gif', style: "width: 100px", alt: "loading" })));
    };
    ElevationProfile.prototype._renderError = function (error) {
        return (tsx("div", { class: this.classes(CSS.chart, CSS.error) },
            tsx("div", null, "An error occured while processing your request."),
            tsx("div", null,
                "  Detailed error message: ",
                error),
            tsx("div", null, "Please try again.")));
    };
    ElevationProfile.prototype._renderElevationProfile = function () {
        var _a;
        var slopeThreshold = this.viewModel.slopeThreshold;
        var classes = (_a = {},
            _a[CSS.fas] = true,
            _a[CSS.leftArrow] = !this.reveresed,
            _a[CSS.rightArrow] = this.reveresed,
            _a);
        return (tsx("div", { class: CSS.widgetInfoBar },
            tsx("div", null,
                tsx("span", { class: CSS.slopeIndicator },
                    tsx("svg", { height: "25", width: "25" },
                        tsx("line", { x1: "0", y1: "12", x2: "25", y2: "12", style: "stroke:rgb(255,0,0);stroke-width:4" })),
                    "\u00A0\u00A0Steep slope > ",
                    slopeThreshold,
                    "%")),
            tsx("div", { class: CSS.chartBottomBar },
                tsx("button", { bind: this, onclick: this.reverseProfile, class: CSS.profileDirection, title: "reveser" },
                    tsx("i", { class: this.classes(classes), title: "reveser" })),
                tsx("span", { class: CSS.createreportBar },
                    tsx("b", null, " Project Name: "),
                    tsx("input", { type: "text", id: "elevationProfileTitle", class: CSS.titleInput }),
                    tsx("button", { bind: this, onclick: this.createReport, class: CSS.createReportBtn }, "Create Report")))));
    };
    ElevationProfile.prototype.start = function () {
        var _this = this;
        this.viewModel.error = "";
        this.viewModel.state = 'idle';
        this.viewModel.showWidget = false;
        var that = this;
        setTimeout(function () {
            _this.sketchVM.create('polyline');
        }, 10);
    };
    ElevationProfile.prototype.reverseProfile = function () {
        this.reveresed = !this.reveresed;
        var div = document.getElementById('myDiv');
        Plotly.purge('myDiv');
        div.outerHTML = div.outerHTML;
        var reversedPtArray = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
        var reveresedArrayNew;
        if (this.reveresed) {
            reveresedArrayNew = JSON.parse(JSON.stringify(reversedPtArray.reverse()));
        }
        else {
            reveresedArrayNew = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
        }
        var _a = this.viewModel.getChartData(reveresedArrayNew, this.viewModel.unit), data = _a[0], options = _a[1], ptArrayNew = _a[2];
        this._renderChart(data, options);
        // console.log(reveresedArrayNew);
        this.viewModel.initializeHover(Plotly, ptArrayNew, this.mapView);
        reveresedArrayNew = undefined;
        reversedPtArray = undefined;
    };
    ElevationProfile.prototype.initSketchVM = function () {
        var graphicsLayer = new GraphicsLayer();
        this.mapView.map.add(graphicsLayer);
        this.sketchVM = new SketchViewModel({
            layer: graphicsLayer,
            view: this.mapView
        });
        this._DrawingComplete();
    };
    ElevationProfile.prototype._DrawingComplete = function () {
        var that = this;
        this.sketchVM.on('create', function (evt) {
            if (evt.state === 'complete') {
                console.log(evt.graphic);
                that.viewModel.userGraphic = evt.graphic;
                that.displayLineChart(evt.graphic);
            }
        });
    };
    ElevationProfile.prototype.displayLineChart = function (graphic) {
        return __awaiter(this, void 0, void 0, function () {
            var elevationData, result, resultJson, ptArray, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.viewModel.state = "loading";
                        this.emit('graphVisible', this);
                        this.viewModel.showWidget = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.viewModel.GetElevationData(graphic)];
                    case 2:
                        elevationData = _a.sent();
                        return [4 /*yield*/, elevationData.text()];
                    case 3:
                        result = _a.sent();
                        resultJson = JSON.parse(result);
                        ptArray = resultJson.results[0].value.features[0].geometry.paths[0];
                        this.viewModel.ptArrayOriginal = ptArray.slice();
                        this.createChart(ptArray.slice());
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.viewModel.state = "error";
                        this.viewModel.error = "Error getting elevation data. " + error_1;
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ElevationProfile.prototype._renderChart = function (data, options) {
        console.log(data, options);
        Plotly.react('myDiv', data, options, { displayModeBar: false, responsive: true, autosize: true });
    };
    ElevationProfile.prototype.createChart = function (dd) {
        var _a;
        this.viewModel.state = 'ready';
        var d = JSON.parse(JSON.stringify(dd));
        var _b = this.viewModel.getChartData(d, this.viewModel.unit), data = _b[0], options = _b[1], ptArrayNew = _b[2];
        this._renderChart(data, options);
        this.viewModel.initializeHover(Plotly, ptArrayNew, this.mapView);
        // this.viewModel.state = 'idle';
        d = null;
        _a = [null, null, null], data = _a[0], options = _a[1], ptArrayNew = _a[2];
    };
    ElevationProfile.prototype.startTest = function () {
        var _this = this;
        // this.render();
        setTimeout(function () {
            var rj = JSON.parse(dt);
            var _ptArray = rj.results[0].value.features[0].geometry.paths[0];
            _ptArray = _ptArray.map(function (p) { return [Decimal(p[0]), Decimal(p[1]), Decimal(p[2])]; });
            _this.viewModel.ptArrayOriginal = JSON.parse(JSON.stringify(_ptArray));
            _this.createChart(_ptArray);
            rj = null;
            _ptArray = null;
        }, 10);
    };
    ElevationProfile.prototype.exit = function () {
        this.viewModel.showWidget = false;
        var div = document.getElementById('myDiv');
        div.outerHTML = div.outerHTML;
        Plotly.purge('myDiv');
        this.viewModel.ptArrayOriginal = null;
        this.sketchVM.layer.graphics.removeAll();
        this.destroy();
    };
    __decorate([
        property()
    ], ElevationProfile.prototype, "mapView", void 0);
    __decorate([
        property()
    ], ElevationProfile.prototype, "sketchVM", void 0);
    __decorate([
        property()
    ], ElevationProfile.prototype, "plot", void 0);
    __decorate([
        property()
    ], ElevationProfile.prototype, "reportURL", void 0);
    __decorate([
        property()
    ], ElevationProfile.prototype, "reveresed", void 0);
    __decorate([
        property(),
        renderable([
            "viewModel.slopeThreshold",
            "viewModel.state",
            "viewModel.showWidget"
        ])
    ], ElevationProfile.prototype, "viewModel", void 0);
    __decorate([
        aliasOf("viewModel.slopeThreshold")
    ], ElevationProfile.prototype, "slopeThreshold", void 0);
    ElevationProfile = __decorate([
        subclass("esri.widgets.ElevationProfile")
    ], ElevationProfile);
    return ElevationProfile;
}(Widget));
export default ElevationProfile;
