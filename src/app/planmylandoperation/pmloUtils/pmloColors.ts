const GetDrainageClassColors: any = () => {
  const drainageClassColors: any = {
    excessDr: { r: 140, g: 81, b: 10 },
    someExcessDr: { r: 216, g: 179, b: 101 },
    wellDr: { r: 246, g: 232, b: 195 },
    modWellDr: { r: 255, g: 255, b: 255 },
    somePoorDr: { r: 199, g: 234, b: 229 },
    poorDr: { r: 90, g: 180, b: 172 },
    veryPoorDr: { r: 1, g: 102, b: 94 },
    notRated: { r: 192, g: 192, b: 192 }
  };
  return drainageClassColors;
};

const GetFourColorsForLegend: any = () => {
  const fourColorsForLegend: any = {
    severe: { r: 252, g: 141, b: 89 },
    moderate: { r: 255, g: 255, b: 191 },
    slight: { r: 145, g: 207, b: 96 },
    notRated: { r: 192, g: 192, b: 192 }
  };
  return fourColorsForLegend;
};

const GetFiveColorsForLegend: any = () => {
  const fiveColorsForLegend: any = {
    verySevere: { r: 215, g: 25, b: 28 },
    severe: { r: 252, g: 141, b: 89 },
    moderate: { r: 145, g: 207, b: 96 },
    slight: { r: 26, g: 150, b: 65 },
    notRated: { r: 192, g: 192, b: 192 }
  };
  return fiveColorsForLegend;
};

export { GetDrainageClassColors, GetFourColorsForLegend, GetFiveColorsForLegend }
