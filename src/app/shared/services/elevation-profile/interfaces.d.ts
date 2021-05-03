export interface ElevationProfileProperties
  extends ElevationProfileViewModelProperties {}

export interface ElevationProfileViewModelProperties {
  slopeThreshold?: number | undefined;
  mapView: any;
  unit: ElevationUnits;
  divId: string;
  isMSL: boolean;
  popup: any;
}

export type ElevationUnits = 'meters' | 'feet' | 'kilometers' | 'miles' | 'nautical-miles' | 'yards';
