import { ElevationUnits } from './interfaces.d';
import Polyline from 'esri/geometry/Polyline';
import { planarLength } from 'esri/geometry/geometryEngine';

const elevationUnitMap = {
  meters: 'meters',
  feet: 'feet',
  kilometers: 'meters',
  miles: 'feet',
  'nautical-miles': 'feet',
  yards: 'feet'
};
const lengthAbbrMap = {
  meters: 'm.',
  feet: 'ft.',
  kilometers: 'km.',
  miles: 'mi.',
  'nautical-miles': 'n.m.',
  yards: 'yd.'
};

const Decimal = (num: number): number => {
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
  if (toString.call(input) !== '[object Array]') return 0;
  return Math.min.apply(null, input);
};
const avg = (input: any):number => {
  const total = input.reduce((acc: any, c: any) => acc + c, 0);
  return total / input.length;
}

const max = (input: any):number => {
  if (toString.call(input) !== '[object Array]') return 0;
  return Math.max.apply(null, input);
};

const sum = (input: any) => {
  return input.reduce((a:any, b:any) => a + b, 0)
};

const CalculateLength = (ptArrayOld: any, unit: ElevationUnits = 'miles') => {
  const pts = JSON.parse(JSON.stringify(ptArrayOld));
  for (let i = 0; i < pts.length; i++) {
    const myArray = pts.slice().splice(0, i + 1);
    const line = new Polyline({
      hasZ: true,
      paths: [myArray],
      spatialReference: { wkid: 102100 }
    });
    const l = planarLength(line, unit);
    pts[i].push(parseFloat(l.toPrecision(2)));
  }
  return pts;
};

const CalculateSegmentLength = (ptArrayOld: any, unit: ElevationUnits = 'miles') => {
  const pts = JSON.parse(JSON.stringify(ptArrayOld));
  for (let i = 0; i < pts.length; i++) {
    const myArray = pts.slice().splice(i, 2);
    const line = new Polyline({
      hasZ: true,
      paths: [myArray],
      spatialReference: { wkid: 102100 }
    });
    const l = planarLength(line, unit);
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
  const pts = [];
  const dt = ptArray.slice();
  for (let i = 0; i < dt.length; i++) {
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

export {
  Decimal,
  elevationUnitMap,
  lengthAbbrMap,
  CalculateSlope,
  min,
  max,
  avg,
  sum,
  CalculateLength,
  CalculateSegmentLength,
  GetSegmentsWithHigherSlope
};
