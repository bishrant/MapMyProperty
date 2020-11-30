import esriConfig from "esri/config";

const InitializeArcGISWorkers = () => {
  const DEFAULT_WORKER_URL = "https://js.arcgis.com/4.17/";
  const DEFAULT_LOADER_URL = `${DEFAULT_WORKER_URL}dojo/dojo-lite.js`;

  esriConfig.workers.loaderUrl = DEFAULT_LOADER_URL;
  esriConfig.workers.loaderConfig = {
    baseUrl: `${DEFAULT_WORKER_URL}dojo`,
    packages: [
      { name: "esri", location: `${DEFAULT_WORKER_URL}esri` },
      { name: "dojo", location: `${DEFAULT_WORKER_URL}dojo` },
      { name: "moment", location: `${DEFAULT_WORKER_URL}moment` },
    ]
  };
};

export {InitializeArcGISWorkers}
