import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
import WMSLayer from '@arcgis/core/layers/WMSLayer';
const _tnrisURL = 'https://imagery.tnris.org/server/rest/services/';

const googleWMSlayer = new WMSLayer({
  url: 'https://txgi.tnris.org/login/path/normal-citizen-medical-trick/wms?',
  id: 'TX Google 6-inch',
  customParameters: { version: '1.1.1', visibleLayers: ['texas'], layers: ['texas'] }
});

const props = { mosaicRule: { method: 'none' }, popupEnabled: false, legendEnabled: false, listMode: 'hide' };

const topo2008 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP08_NC_50cm/ImageServer', id: 'TXw TOP 2008 NC 50cm', ...props } as any);
const topo2009 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP09_NC_50cm/ImageServer', id: 'TXe TOP 2009 NC 50cm', ...props } as any);
const naip2010 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP10_NCCIR_1m/ImageServer', id: 'TX NAIP 2010 NC 1m', ...props } as any);
const naip2012 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP12_NCCIR_1m/ImageServer', id: 'TX NAIP 2012 NC 1m', ...props } as any);
const naip2014 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP14_NCCIR_1m/ImageServer', id: 'TX NAIP 2014 NC 1m', ...props } as any);
const topo2015 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP15_NCCIR_50cm/ImageServer', id: 'TX TOP 2015 NC 50cm', ...props } as any);
const naip2016 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP16_NCCIR_1m/ImageServer', id: 'TX NAIP 2016 NC 1m', ...props } as any);
const naip2018 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP18_NCCIR_60cm/ImageServer', id: 'TX NAIP 2018 NC 60cm', ...props } as any);

const cirProps = { ...props, bandIds: [3, 0, 1] }
const topo1996_cir = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP96_CIR_1m/ImageServer', id: 'TX TOP 1996 CIR 1m', ...cirProps } as any);
const naip2004_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP04_CIR_1m/ImageServer', id: 'TX NAIP 2004 CIR 1m', ...cirProps } as any);
const topo2008_cir = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP08_CIR_50cm/ImageServer', id: 'TXw TOP 2008 CIR 50cm', ...props } as any);
const topo2009_cir = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP09_CIR_50cm/ImageServer', id: 'TXe TOP 2009 CIR 50cm', ...props } as any);
const naip2010_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP10_NCCIR_1m/ImageServer', id: 'TX NAIP 2010 CIR 1m', ...cirProps } as any);
const naip2012_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP12_NCCIR_1m/ImageServer', id: 'TX NAIP 2012 CIR 1m', ...cirProps } as any);
const naip2014_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP14_NCCIR_1m/ImageServer', id: 'TX NAIP 2014 CIR 1m', ...cirProps } as any);
const topo2015_cir = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP15_NCCIR_50cm/ImageServer', id: 'TX TOP 2015 CIR 50cm', ...cirProps } as any);
const naip2016_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP16_NCCIR_1m/ImageServer', id: 'TX NAIP 2016 CIR 1m', ...cirProps } as any);
const naip2018_cir = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP18_NCCIR_60cm/ImageServer', id: 'TX NAIP 2018 CIR 60cm', ...cirProps } as any);

const nationalNaip = new ImageryTileLayer({
  url: 'https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer'

})
const naturalColorBasemapsDict = {
  'TX Google 6-inch': googleWMSlayer,
  'TX NAIP 2018 NC 60cm': naip2018,
  'TX NAIP 2016 NC 1m': naip2016,
  'TX TOP 2015 NC 50cm': topo2015,
  'TX NAIP 2014 NC 1m': naip2014,
  'TX NAIP 2012 NC 1m': naip2012,
  'TX NAIP 2010 NC 1m': naip2010,
  'TXe TOP 2009 NC 50cm': topo2009,
  'TXw TOP 2008 NC 50cm': topo2008
}

const infraredBasemapsDict = {
  'TX NAIP 2018 CIR 60cm': naip2018_cir,
  'TX NAIP 2016 CIR 1m': naip2016_cir,
  'TX TOP 2015 CIR 50cm': topo2015_cir,
  'TX NAIP 2014 CIR 1m': naip2014_cir,
  'TX NAIP 2012 CIR 1m': naip2012_cir,
  'TX NAIP 2010 CIR 1m': naip2010_cir,
  'TXe TOP 2009 CIR 50cm': topo2009_cir,
  'TXw TOP 2008 CIR 50cm': topo2008_cir,
  'TX NAIP 2004 CIR 1m': naip2004_cir,
  'TX TOP 1996 CIR 1m': topo1996_cir
}

export {
  naturalColorBasemapsDict, infraredBasemapsDict, nationalNaip,
  googleWMSlayer, topo2008, topo2009, naip2010, naip2012, naip2014, topo2015, naip2016, naip2018,
  topo1996_cir, naip2004_cir, topo2008_cir, topo2009_cir, naip2010_cir, naip2012_cir, naip2014_cir, topo2015_cir,
  naip2016_cir, naip2018_cir
}
