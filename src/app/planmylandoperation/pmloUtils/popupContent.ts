import { MMPSoil } from 'src/app/mapmyproperty/models/mmpSoil.model';
import { PMLOSoil } from '../models/pmloSoil.model';

const GetPMLOSoilPopupContent = (soil: PMLOSoil) => {
  const ecoclassidUrl:string = 'https://edit.jornada.nmsu.edu/catalogs/esd/' + soil.ecoclassid.substring(1, 5) + '/' + soil.ecoclassid;

  const popupContent: string = `
      <div class="pmlo-popup-content">
        <p class="mt-2"><b>Map Unit Name</b></p>
        <p>${soil.muname}</p>

        <p class="mt-2"><b>Map Unit Dominant Component</b></p>
        <p>${soil.compname}</p>

        <p class="mt-2"><b>Percent of Map Unit</b></p>
        <p>${soil.comppct_r}</p>

        <p class="mt-2"><b>Taxonomic Classification</b></p>
        <p>${soil.taxclname !== '' ? soil.taxclname : '&mdash;'}</p>

        <p class="mt-2"><b>A Horizon</b></p>
        <p>${soil.Horizon_A !== '' ? soil.Horizon_A : '&mdash;'}</p>

        <p class="mt-2"><b>B Horizon</b></p>
        <p>${soil.Horizon_B !== '' ? soil.Horizon_B : '&mdash;'}</p>


        <p class="mt-2"><b>Erosion Class</b></p>
        <p>${soil.erocl !== '' ? soil.erocl : '&mdash;'}</p>

        <p class="mt-2"><b>Drainage Class</b></p>
        <p>${soil.drclassdcd !== '' ? soil.drclassdcd : '&mdash;'}</p>

        <p class="mt-2"><b>Depth to Water Table (inches)</b></p>
        <p>${soil.wtdepannmin !== '' ? soil.wtdepannmin : '&mdash;'}</p>

        <p class="mt-2"><b>Hydric Rating</b></p>
        <p>${soil.Hydric_Rating}</p>

        <p class="mt-2"><b>Flooding Frequency</b></p>
        <p>${soil.flodfreqdcd !== '' ? soil.flodfreqdcd : '&mdash;'}</p>

        <p class="mt-2"><b>Presence of Ponding</b></p>
        <p>${soil.pondfreqprs}</p>

        <p class="mt-2"><b>Site Index Max Value</b></p>
        <p>${soil.si !== '' ? soil.si : '&mdash;'}</p>

        <p class="mt-2"><b>Site Index Max Value Species</b></p>
        <p>${soil.plantcomname !== '' ? soil.plantcomname : '&mdash;'}</p>

        <p class="mt-2"><b>Ecological Class ID</b></p>
        <p>${soil.ecoclassid !== '' ? '<a href="' + ecoclassidUrl + '" target="_blank" rel="noopener noreferrer">' + soil.ecoclassid + '</a>' : '&mdash;'}</p>

        <p class="mt-2"><b>Ecological Class</b></p>
        <p>${soil.ecoclassname !== '' ? soil.ecoclassname : '&mdash;'}</p>

        <p class="mt-2"><b>Const. Limit. - Haul Rds & Log Landings</b></p>
        <p>${soil.CLRoadLndg}</p>

        <p class="mt-2"><b>Harvest Equip. Operability</b></p>
        <p>${soil.HEquipOp}</p>

        <p class="mt-2"><b>Erosion Hazard - Off-Road/Trail</b></p>
        <p>${soil.EroHzdORT}</p>

        <p class="mt-2"><b>Erosion Hazard - Road/Trail</b></p>
        <p>${soil.EroHzdRT}</p>

        <p class="mt-2"><b>Soil Rutting Hazard</b></p>
        <p>${soil.SoilRutHzd}</p>

        <p class="mt-2"><b>Suitability - Rds & Log Landings</b></p>
        <p>${soil.LogLndg}</p>

        <p class="mt-2"><b>Suitability - Rds on Natural Surface</b></p>
        <p>${soil.RoadSuitNS}</p>

        <p class="mt-2"><b>Potential for Seedling Mortality</b></p>
        <p>${soil.SeedMortal}</p>

        <p class="mt-2"><b>Mechanical Site Preparation (Surface)</b></p>
        <p>${soil.SitePrepS}</p>

        <p class="mt-2"><b>Mechanical Site Preparation (Deep)</b></p>
        <p>${soil.SitePrepD}</p>

        <p class="mt-2"><b>Suitability for Machine Planting</b></p>
        <p>${soil.MechPlant}</p>

        <p class="mt-2"><b>Suitability for Hand Planting</b></p>
        <p>${soil.HandPlant}</p>

        <p class="mt-2"><b>Potential for Damage by Fire</b></p>
        <p>${soil.FireDamage}</p>

        <p class="mt-2"><b>Survey Area Version</b></p>
        <p>${soil.saversion}</p>

        <p class="mt-2"><b>Tabular Version</b></p>
        <p>${soil.tabularversion}</p>

        <p class="mt-2"><b>Spatial Version</b></p>
        <p>${soil.spatialversion}</p>
      </div>
    `;
  return popupContent;
}

const GetMMPSoilPopupContent = (soil: MMPSoil) => {
  const ecoclassidUrl:string = 'https://edit.jornada.nmsu.edu/catalogs/esd/' + soil.ecoclassid.substring(1, 5) + '/' + soil.ecoclassid;

  const popupContent: string = `
      <div class="pmlo-popup-content">
        <p class="mt-2"><b>Map Unit Symbol</b></p>
        <p>${soil.musym}</p>

        <p class="mt-2"><b>Map Unit Name</b></p>
        <p>${soil.muname}</p>

        <p class="mt-2"><b>Slope Gradient (%)</b></p>
        <p>${soil.slopegradwta !== '' ? soil.slopegradwta : '&mdash;'}</p>

        <p class="mt-2"><b>Potential Erosion Hazard</b></p>
        <p>${soil.forpehrtdcp}</p>

        <p class="mt-2"><b>Flooding Frequency</b></p>
        <p>${soil.flodfreqdcd}</p>

        <p class="mt-2"><b>Drainage Class</b></p>
        <p>${soil.drclassdcd}</p>

        <p class="mt-2"><b>Hydric Rating (%)</b></p>
        <p>${soil.hydclprs}</p>

        <p class="mt-2"><b>pH Top Horizon:</b></p>
        <p>${soil.pH}</p>

        <p class="mt-2"><b>Ecological Class ID</b></p>
        <p>${soil.ecoclassid !== '' ? '<a href="' + ecoclassidUrl + '" target="_blank" rel="noopener noreferrer">' + soil.ecoclassid + '</a>' : '&mdash;'}</p>

        <p class="mt-2"><b>Ecological Class</b></p>
        <p>${soil.ecoclassname !== '' ? soil.ecoclassname : '&mdash;'}</p>

        <p class="mt-2"><b>Range Productivity (lb/ac/yr)</b></p>
        <p>${soil.rpa}</p>

        <p class="mt-2"><b>Forest productivity (cuft/ac/yr)</b></p>
        <p>${soil.fpa}</p>

        <p class="mt-2"><b>Site Index Max Value</b></p>
        <p>${soil.si !== '' ? soil.si : '&mdash;'}</p>

        <p class="mt-2"><b>Site Index Max Value Species</b></p>
        <p>${soil.plantcomname !== '' ? soil.plantcomname : '&mdash;'}</p>

        <p class="mt-2"><b>Survey Area Version</b></p>
        <p>${soil.saversion}</p>

        <p class="mt-2"><b>Tabular Version</b></p>
        <p>${soil.tabularversion}</p>

        <p class="mt-2"><b>Spatial Version</b></p>
        <p>${soil.spatialversion}</p>
      </div>
    `;
  return popupContent;
}

export { GetPMLOSoilPopupContent, GetMMPSoilPopupContent }
