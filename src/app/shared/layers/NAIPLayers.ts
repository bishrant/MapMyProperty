import ImageryLayer from 'esri/layers/ImageryLayer';
import WMSLayer from 'esri/layers/WMSLayer';
const _tnrisURL = 'https://webservices.tnris.org/arcgis/rest/services/';

const googleWMSlayer = new WMSLayer({
  url: 'https://txgi.tnris.org/login/path/normal-citizen-medical-trick/wms?',
  id: 'TX Google 6-inch',
  customParameters: { version: '1.1.1', visibleLayers: ['texas'] }
});

const topo1996 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP96_CIR_1m/ImageServer', id: 'topo1996' });
const naip2004 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP04_CIR_1m/ImageServer', id: 'TX NAIP 2004' });
const topo2008 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP08_NC_50cm/ImageServer', id: 'TX TOP 2008' });
const topo2009 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP09_NC_50cm/ImageServer', id: 'TX TOP 2009' });
const naip2010 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP10_NC_CIR_1m/ImageServer', id: 'TX NAIP 2010' });
const naip2012 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP12_NC_CIR_1m/ImageServer', id: 'TX NAIP 2012' });
const naip2014 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP14_NC_CIR_1m/ImageServer', id: 'TX NAIP 2014' });
const topo2015 = new ImageryLayer({ url: _tnrisURL + 'TOP/TOP15_NC_CIR_50cm/ImageServer', id: 'TX TOP 2015' });
const naip2016 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP16_NC_CIR_1m/ImageServer', id: 'TX NAIP 2016' });
const naip2018 = new ImageryLayer({ url: _tnrisURL + 'NAIP/NAIP18_NC_CIR_60cm/ImageServer', id: 'TX NAIP 2018' });

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
