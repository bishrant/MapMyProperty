import { PMLOSoil } from "../models/pmloSoil.model";

const GetPMLOSoilPopupContent = (soil: PMLOSoil) => {
    const ecoclassidUrl:string = 'https://edit.jornada.nmsu.edu/catalogs/esd/' + soil.ecoclassid.substring(1,5) + '/' + soil.ecoclassid;
    const popupContent: string = `
    <div class="pmlo-popup-content">
        <p class="my-5"><b>Map Unit Name: </b><span>${soil.muname}</span></p>
        <p class="my-5"><b>Map Unit Dominant Component: </b><span>${soil.compname}</span></p>
        <p class="my-5"><b>Percent of Map Unit: </b><span>${soil.comppct_r}</span></p>
        <p class="my-5"><b>Taxonomic Classification: </b><span>${soil.taxclname}</span></p>
        <p class="my-5"><b>A Horizon: </b><span>${soil.Horizon_A}</span></p>
        <p class="my-5"><b>B Horizon: </b><span>${soil.Horizon_B}</span></p>
        <p class="my-5"><b>Slope Gradient (%): </b><span>${soil.slopegradwta}</span></p>
        <p class="my-5"><b>Erosion Class: </b><span>${soil.erocl}</span></p>
        <p class="my-5"><b>Drainage Class: </b><span>${soil.drclassdcd}</span></p>
        <p class="my-5"><b>Depth to Water Table (inches): </b><span>${soil.wtdepannmin}</span></p>
        <p class="my-5"><b>Hydric Rating: </b><span>${soil.Hydric_Rating}</span></p>
        <p class="my-5"><b>Flooding Frequency: </b><span>${soil.flodfreqdcd}</span></p>
        <p class="my-5"><b>Presence of Ponding: </b><span>${soil.pondfreqprs}</span></p>
        <p class="my-5"><b>Site Index Max Value: </b><span>${soil.si}</span></p>
        <p class="my-5"><b>Site Index Max Value Species: </b><span>${soil.plantcomname}</span></p>
        <p class="my-5"><b>Ecological Class ID: </b><span><a href="${ecoclassidUrl}" target="_blank" rel="noopener noreferrer">${soil.ecoclassid}</a></span></p>
        <p class="my-5"><b>Ecological Class: </b><span>${soil.ecoclassname}</span></p>
        <p class="my-5"><b>Const. Limit. - Haul Rds & Log Landings: </b><span>${soil.CLRoadLndg}</span></p>
        <p class="my-5"><b>Harvest Equip. Operability: </b><span>${soil.HEquipOp}</span></p>
        <p class="my-5"><b>Erosion Hazard - Off-Road/Trail: </b><span>${soil.EroHzdORT}</span></p>
        <p class="my-5"><b>Erosion Hazard - Road/Trail: </b><span>${soil.EroHzdRT}</span></p>
        <p class="my-5"><b>Soil Rutting Hazard: </b><span>${soil.SoilRutHzd}</span></p>
        <p class="my-5"><b>Suitability - Rds & Log Landings: </b><span>${soil.LogLndg}</span></p>
        <p class="my-5"><b>Suitability - Rds on Natural Surface: </b><span>${soil.RoadSuitNS}</span></p>
        <p class="my-5"><b>Potential for Seedling Mortality: </b><span>${soil.SeedMortal}</span></p>
        <p class="my-5"><b>Mechanical Site Preparation (Surface): </b><span>${soil.SitePrepS}</span></p>
        <p class="my-5"><b>Mechanical Site Preparation (Deep): </b><span>${soil.SitePrepD}</span></p>
        <p class="my-5"><b>Suitability for Machine Planting: </b><span>${soil.MechPlant}</span></p>
        <p class="my-5"><b>Suitability for Hand Planting: </b><span>${soil.HandPlant}</span></p>
        <p class="my-5"><b>Potential for Damage by Fire: </b><span>${soil.FireDamage}</span></p>
        <p class="my-5"><b>Survey Area Version: </b><span>${soil.saversion}</span></p>
        <p class="my-5"><b>Tabular Version: </b><span>${soil.tabularversion}</span></p>
        <p class="my-5"><b>Spatial Verson: </b><span>${soil.spatialversion}</span></p>
    </div>
    `;
    return popupContent;
}

export { GetPMLOSoilPopupContent }