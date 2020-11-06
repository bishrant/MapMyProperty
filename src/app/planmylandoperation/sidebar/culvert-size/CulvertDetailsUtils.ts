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

const culvertSizeChart = {
  '5': [18, 18, 18, 18, 18, 24, 24, 24, 24],
  '10': [18, 18, 18, 24, 24, 30, 30, 30, 36],
  '20': [18, 18, 18, 24, 30, 36, 36, 36, 42],
  '30': [18, 18, 18, 30, 30, 36, 36, 42, 48],
  '40': [18, 18, 18, 30, 36, 42, 42, 48, 99],
  '50': [18, 18, 18, 30, 36, 48, 48, 48, 99],
  '75': [18, 24, 24, 36, 42, 99, 99, 99, 99],
  '100': [24, 24, 24, 36, 48, 99, 99, 99, 99],
  '150': [24, 24, 24, 42, 99, 99, 99, 99, 99],
  '200': [24, 30, 30, 48, 99, 99, 99, 99, 99],
  '250': [30, 30, 30, 99, 99, 99, 99, 99, 99],
  '300': [30, 36, 36, 99, 99, 99, 99, 99, 99],
  '350': [30, 36, 42, 99, 99, 99, 99, 99, 99],
  '400': [36, 36, 42, 99, 99, 99, 99, 99, 99]
}



export { getSoilTextureClass };
