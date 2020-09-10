import { ElevationUnits } from './interfaces.d';
import Polyline from "esri/geometry/Polyline";
import { planarLength } from "esri/geometry/geometryEngine";

const elevationUnitMap = {
  meters: "meters",
  feet: "feet",
  kilometers: "meters",
  miles: "feet",
  "nautical-miles": "feet",
  yards: "feet",
};
const lengthAbbrMap = {
  meters: "m.",
  feet: "ft.",
  kilometers: "km.",
  miles: "mi.",
  "nautical-miles": "n.m.",
  yards: "yd.",
};

const Decimal = (num: number): number=> {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const _slope = (p1: any[], p2: any[]) => {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const rise = p2[2] - p1[2];
  const run = Math.sqrt(dx * dx + dy * dy);
  const _slope = Math.round((rise / run) * 1000) / 10;
  return Math.abs(_slope);
};

const min = (input: any):number => {
  if (toString.call(input) !== "[object Array]") return 0;
  return Math.min.apply(null, input);
};
const avg = (input: any):number => {
  const total = input.reduce((acc: any, c: any) => acc + c, 0);
  return total / input.length;
}

const max = (input: any):number => {
  if (toString.call(input) !== "[object Array]") return 0;
  return Math.max.apply(null, input);
};

const sum = (input: any) => {
  return input.reduce((a:any, b:any) => a + b, 0)
};

const CalculateLength = (ptArrayOld: any, unit: ElevationUnits = 'miles') => {
  var pts = JSON.parse(JSON.stringify(ptArrayOld));
  for (let i = 0; i < pts.length; i++) {
    var myArray = pts.slice().splice(0, i + 1);
    var line = new Polyline({
      hasZ: true,
      paths: [myArray],
      spatialReference: { wkid: 102100 },
    });
    var l = planarLength(line, unit);
    pts[i].push(parseFloat(l.toPrecision(2)));
  }
  return pts;
};

const CalculateSegmentLength = (ptArrayOld: any, unit: ElevationUnits = 'miles') => {
  var pts = JSON.parse(JSON.stringify(ptArrayOld));
  for (let i = 0; i < pts.length; i++) {
    var myArray = pts.slice().splice(i, 2);
    var line = new Polyline({
      hasZ: true,
      paths: [myArray],
      spatialReference: { wkid: 102100 },
    });
    var l = planarLength(line, unit);
    pts[i].push(parseFloat(l.toPrecision(2)));
  }
  return pts;
};

const CalculateSlope = (ptArrayOld: any) => {
  const ptArrayNew = JSON.parse(JSON.stringify(ptArrayOld));
  ptArrayNew.map((p: any, i: any) => {
    if (i + 1 >= ptArrayNew.length) {
      p.push(0);
    } else {
      p.push(_slope(p, ptArrayNew[i + 1]));
    }
    return p;
  });
  ptArrayOld = undefined;
  return ptArrayNew;
};

const GetSegmentsWithHigherSlope = (ptArray: any, threshold: number) => {
  let pts = [];
  let dt = ptArray.slice();
  for (var i = 0; i < dt.length; i++) {
    if (i > dt.length) {
      break;
    }

    const dist = dt[i][3];
    if (dt[i][4] >= threshold) {
      pts.push([dist, dt[i][2]]);
      if (i + 1 < dt.length) {
        const nextDist = dt[i + 1][3];
        pts.push([nextDist, dt[i + 1][2]]);
      }
    } else {
      pts.push([dist, null]);
    }
  }
  const x = pts.map((k) => k[0]);
  const y = pts.map((k) => k[1]);
  return [x, y];
};

const dt = '{"results":[{"paramName":"OutputProfile","dataType":"GPFeatureRecordSetLayer","value":{"displayFieldName":"","hasZ":true,"geometryType":"esriGeometryPolyline","spatialReference":{"wkid":102100,"latestWkid":3857},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"DEMResolution","type":"esriFieldTypeString","alias":"DEM Resolution","length":50},{"name":"ProductName","type":"esriFieldTypeString","alias":"Product Name","length":50},{"name":"Source","type":"esriFieldTypeString","alias":"Source","length":50},{"name":"Source_URL","type":"esriFieldTypeString","alias":"Source URL","length":84},{"name":"ProfileLength","type":"esriFieldTypeDouble","alias":"Length Meters"},{"name":"Shape_Length","type":"esriFieldTypeDouble","alias":"Shape_Length"}],"features":[{"attributes":{"OBJECTID":1,"DEMResolution":"10m","ProductName":"NED_1r3_arcsec","Source":"USGS","Source_URL":"http://ned.usgs.gov","ProfileLength":900.22165314296501,"Shape_Length":1245.4886864862115},"geometry":{"hasZ":true,"paths":[[[-11167903.383099999,5417968.4337000027,575.81879999999364],[-11167911.4989,5417941.6193000004,576.60259999999835],[-11167919.614800001,5417914.8051000014,577.82090000000608],[-11167927.730599999,5417887.9909000024,579.18379999999888],[-11167935.8464,5417861.1767000034,580.39220000000205],[-11167943.962300001,5417834.3625999987,581.58299999999872],[-11167952.0781,5417807.5487999991,582.80030000000261],[-11167960.194,5417780.7348000035,584.52969999999914],[-11167968.309699999,5417753.9209999964,586.00350000000617],[-11167976.4256,5417727.1074000001,586.50999999999476],[-11167984.5415,5417700.2937000021,586.97920000000158],[-11167992.657299999,5417673.4799999967,586.12119999999413],[-11168000.7732,5417646.6665000021,584.05469999999332],[-11168008.888900001,5417619.8532000035,582.0573000000004],[-11168017.004799999,5417593.0398000032,581.119200000001],[-11168025.1206,5417566.2264999971,580.74349999999686],[-11168033.236500001,5417539.4131999984,582.79469999999856],[-11168041.352399999,5417512.6001999974,586.38809999999648],[-11168049.4681,5417485.7871999964,588.95419999999285],[-11168057.584000001,5417458.9742000028,590.90099999999802],[-11168065.6998,5417432.1613999978,594.16049999999814],[-11168073.8157,5417405.3486000001,596.18970000000263],[-11168081.931500001,5417378.5358000025,597.56879999999364],[-11168090.0473,5417351.7230999991,598.52129999999306],[-11168098.1631,5417324.9107000008,599.00400000000081],[-11168106.278999999,5417298.0980999991,599.26510000000417],[-11168126.5121,5417306.2265999988,599.31179999999586],[-11168146.745100001,5417314.3550999984,598.58389999999781],[-11168166.9782,5417322.4834000021,597.24929999999586],[-11168187.211200001,5417330.6119000018,595.28519999999844],[-11168207.4443,5417338.7404000014,593.77090000000317],[-11168227.677200001,5417346.868900001,591.886599999998],[-11168247.9103,5417354.9974000007,591.62089999999444],[-11168268.143300001,5417363.1257999986,591.87330000000657],[-11168288.376399999,5417371.2542999983,591.71240000000398],[-11168308.6094,5417379.3827999979,592.76230000000214],[-11168328.842499999,5417387.5112999976,593.420100000003],[-11168349.0755,5417395.6398999989,594.17369999999937],[-11168369.308599999,5417403.7682999969,595.27640000000247],[-11168389.5416,5417411.8968999982,597.12859999999637],[-11168409.774700001,5417420.0253999978,597.84560000000056],[-11168430.0077,5417428.1539999992,598.69580000000133],[-11168450.240800001,5417436.2826000005,599.12829999999667],[-11168470.4737,5417444.4109999985,599.00059999999939],[-11168490.706800001,5417452.5395999998,598.51300000000629],[-11168510.9398,5417460.6682000011,597.91289999999572],[-11168531.172900001,5417468.7968000025,597.23380000000179],[-11168551.4059,5417476.9253999963,596.37699999999313],[-11168571.639,5417485.0539000034,595.90700000000652],[-11168591.872,5417493.1824999973,595.63640000000305],[-11168612.1051,5417501.3112000003,594.34429999999702]]]}}],"exceededTransferLimit":false}}],"messages":[]}';
export {
  Decimal,
  elevationUnitMap,
  lengthAbbrMap,
  CalculateSlope,
  min,
  max,
  avg,
  sum,
  dt,
  CalculateLength,
  CalculateSegmentLength,
  GetSegmentsWithHigherSlope,
};
