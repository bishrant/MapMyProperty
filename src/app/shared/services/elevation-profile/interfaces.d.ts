import WidgetProperties = __esri.WidgetProperties;

export interface ElevationProfileProperties
  extends ElevationProfileViewModelProperties,
    WidgetProperties {}

export interface ElevationProfileViewModelProperties {
  slopeThreshold?: number | undefined;
  mapView: any;
  unit: ElevationUnits;
}

export type ElevationUnits = 'meters' | 'feet' | 'kilometers' | 'miles' | 'nautical-miles' | 'yards';