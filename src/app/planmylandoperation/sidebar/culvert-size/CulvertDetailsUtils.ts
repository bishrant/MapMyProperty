const getSoilTextureClass = function (clay, sand, silt) {
  //Checking the soil texture classification (source: NRCS)
  var soilTextureClass = "";
  if ((silt + 1.5 * clay) < 15) {
    soilTextureClass = "Sand";
  }
  else if ((silt + 1.5 * clay >= 15) && (silt + 2 * clay < 30)) {
    soilTextureClass = "Loamy Sand"
  }
  else if ((clay >= 7 && clay < 20) && (sand > 52) && ((silt + 2 * clay) >= 30) || (clay < 7 && silt < 50 && (silt + 2 * clay) >= 30)) {
    soilTextureClass = "Sandy Loam";
  }
  else if ((clay >= 7 && clay < 27) && (silt >= 28 && silt < 50) && (sand <= 52)) {
    soilTextureClass = "Loam";
  }
  else if ((silt >= 50 && (clay >= 12 && clay < 27)) || ((silt >= 50 && silt < 80) && clay < 12)) {
    soilTextureClass = "Silt Loam";
  }
  else if (silt >= 80 && clay < 12) {
    soilTextureClass = "Silt";
  }
  else if ((clay >= 20 && clay < 35) && (silt < 28) && (sand > 45)) {
    soilTextureClass = "Sandy Clay Loam";
  }
  else if ((clay >= 27 && clay < 40) && (sand > 20 && sand <= 45)) {
    soilTextureClass = "Clay Loam";
  }
  else if ((clay >= 27 && clay < 40) && (sand <= 20)) {
    soilTextureClass = "Silty Clay Loam";
  }
  else if (clay >= 35 && sand > 45) {
    soilTextureClass = "Sandy Clay";
  }
  else if (clay >= 40 && silt >= 40) {
    soilTextureClass = "Silty Clay";
  }
  else if (clay >= 40 && sand <= 45 && silt < 40) {
    soilTextureClass = "Clay";
  }

  return soilTextureClass;
};

const culvertSizeChart = [
  [18, 18, 18, 18, 18, 24, 24, 24, 24],
  [18, 18, 18, 24, 24, 30, 30, 30, 36],
  [18, 18, 18, 24, 30, 36, 36, 36, 42],
  [18, 18, 18, 30, 30, 36, 36, 42, 48],
  [18, 18, 18, 30, 36, 42, 42, 48, 99],
  [18, 18, 18, 30, 36, 48, 48, 48, 99],
  [18, 24, 24, 36, 42, 99, 99, 99, 99],
  [24, 24, 24, 36, 48, 99, 99, 99, 99],
  [24, 24, 24, 42, 99, 99, 99, 99, 99],
  [24, 30, 30, 48, 99, 99, 99, 99, 99],
  [30, 30, 30, 99, 99, 99, 99, 99, 99],
  [30, 36, 36, 99, 99, 99, 99, 99, 99],
  [30, 36, 42, 99, 99, 99, 99, 99, 99],
  [36, 36, 42, 99, 99, 99, 99, 99, 99]
];

const getSoilTextureClassIndex = (soilTextureClass: string, slope: any) => {
  let soilGroupClass = '';
  // Checking if the soil texture group is light, medium or heavy
  const lightSoils = ["Sand", "Loamy Sand", "Sandy Loam"];
  const mediumSoils = ["Loam", "Silt Loam", "Silt", "Sandy Clay Loam", "Clay Loam", "Silty Clay Loam"];
  const heavySoils = ["Sandy Clay", "Silty Clay", "Clay"];

  if (lightSoils.indexOf(soilTextureClass) !== -1) {
    soilGroupClass = "l";
  }
  else if (mediumSoils.indexOf(soilTextureClass) !== -1) {
    soilGroupClass = "m";
  }
  else if (heavySoils.indexOf(soilTextureClass) !== -1) {
    soilGroupClass = "h";
  }

  // Slope Classification
  var slopeGroup = (slope < 5) ? "Flat" : (slope < 15) ? "Moderate" : "Steep";

  var soilGroupSlope = soilGroupClass + slopeGroup;

  const classes = ["lFlat", 'lModerate', 'lSteep', "mFlat", 'mModerate', 'mSteep', "hFlat", 'hModerate', 'hSteep'];

  return classes.indexOf(soilGroupSlope);
}

const getAcresDrainedIndex = (watershedArea: number) => {
  var acresDrainedIndexResult = 0;

  if (watershedArea <= 5) {
    acresDrainedIndexResult = 0;
  }

  else if (watershedArea <= 10) {
    acresDrainedIndexResult = 1;
  }

  else if (watershedArea <= 20) {
    acresDrainedIndexResult = 2;
  }

  else if (watershedArea <= 30) {
    acresDrainedIndexResult = 3;
  }

  else if (watershedArea <= 40) {
    acresDrainedIndexResult = 4;
  }

  else if (watershedArea <= 50) {
    acresDrainedIndexResult = 5;
  }

  else if (watershedArea <= 75) {
    acresDrainedIndexResult = 6;
  }

  else if (watershedArea <= 100) {
    acresDrainedIndexResult = 7;
  }

  else if (watershedArea <= 150) {
    acresDrainedIndexResult = 8;
  }

  else if (watershedArea <= 200) {
    acresDrainedIndexResult = 9;
  }

  else if (watershedArea <= 250) {
    acresDrainedIndexResult = 10;
  }

  else if (watershedArea <= 300) {
    acresDrainedIndexResult = 11;
  }

  else if (watershedArea <= 350) {
    acresDrainedIndexResult = 12;
  }

  else if (watershedArea <= 400) {
    acresDrainedIndexResult = 13;
  }

  else {
    acresDrainedIndexResult = NaN;
  }

  return acresDrainedIndexResult;
}

const getCulvertSize = (soilTextureClass: string, slope: number, watershedArea: any) => {
  const soilTexture = getSoilTextureClassIndex(soilTextureClass, slope);
  const acresDraindedIndex = getAcresDrainedIndex(watershedArea);

  if (watershedArea <= 400) {
    const _size = culvertSizeChart[acresDraindedIndex][soilTexture];
    return (_size !== 99) ? (_size + ' inches') : 'Off Chart';
  } else {
    return "Off Chart";
  }
}


export { getSoilTextureClass, getCulvertSize };
