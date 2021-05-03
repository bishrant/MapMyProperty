import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import WMSLayer from '@arcgis/core/layers/WMSLayer';
const _tnrisURL = 'https://imagery.tnris.org/server/rest/services/';

const googleWMSlayer = new WMSLayer({
  url: 'https://txgi.tnris.org/login/path/normal-citizen-medical-trick/wms?',
  id: 'TX Google 6-inch',
  customParameters: { version: '1.1.1', visibleLayers: ['texas'], layers: ['texas'] }
});

const props = { mosaicRule: { method: 'none' }, popupEnabled: false, legendEnabled: false, listMode: 'hide' };

const topo1996 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP96_CIR_1m/ImageServer', id: 'TX TOP 1996', ...props } as any);
const naip2004 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP04_CIR_1m/ImageServer', id: 'TX NAIP 2004', ...props } as any);
const topo2008 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP08_NC_50cm/ImageServer', id: 'TXw TOP 2008', ...props } as any);
const topo2009 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP09_NC_50cm/ImageServer', id: 'TXe TOP 2009', ...props } as any);
const naip2010 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP10_NCCIR_1m/ImageServer', id: 'TX NAIP 2010', ...props } as any);
const naip2012 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP12_NCCIR_1m/ImageServer', id: 'TX NAIP 2012', ...props } as any);
const naip2014 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP14_NCCIR_1m/ImageServer', id: 'TX NAIP 2014', ...props } as any);
const topo2015 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP15_NCCIR_50cm/ImageServer', id: 'TX TOP 2015', ...props } as any);
const naip2016 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP16_NCCIR_1m/ImageServer', id: 'TX NAIP 2016', ...props } as any);
const naip2018 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP18_NCCIR_60cm/ImageServer', id: 'TX NAIP 2018', ...props } as any);

const texasBasemaps = ['TX Google 6-inch', 'TX NAIP 2018', 'TX NAIP 2016', 'TX TOP 2015', 'TX NAIP 2014',
  'TX NAIP 2012', 'TX NAIP 2010',
  'TXe TOP 2009', 'TXw TOP 2008', 'TX NAIP 2004', 'TX TOP 1996'];

const texasBasemapsDict = {
  'TX Google 6-inch': googleWMSlayer,
  'TX NAIP 2018': naip2018,
  'TX NAIP 2016': naip2016,
  'TX TOP 2015': topo2015,
  'TX NAIP 2014': naip2014,
  'TX NAIP 2012': naip2012,
  'TX NAIP 2010': naip2010,
  'TXe TOP 2009': topo2009,
  'TXw TOP 2008': topo2008,
  'TX NAIP 2004': naip2004,
  'TX TOP 1996': topo1996
}

export {
  texasBasemaps, texasBasemapsDict,
  googleWMSlayer, topo1996, naip2004, topo2008, topo2009, naip2010, naip2012, naip2014, topo2015, naip2016, naip2018
}
