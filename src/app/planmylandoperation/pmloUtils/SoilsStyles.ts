import { FillProps, LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { HexToRGB } from 'src/app/shared/utils/Colors';

const orangeColor: any = { r: 240, g: 165, b: 45, a: 1 };

const GetSoilFillProps: any = (gra:__esri.Graphic, alpha:number) => {
    let hexColor: string = gra.getAttribute('HexColor');
    if (gra.getAttribute('musym') === 'W')
    {
        hexColor = WaterBlueHexColor;
    }
    const rgbObject: any = HexToRGB(hexColor);
    const fillProps: FillProps = {
        color: {r: rgbObject.r, g: rgbObject.g, b: rgbObject.b, a: alpha },
        style: 'solid',
        opacity: 100
    };
    return fillProps;
};

const GetOrageLineProps: any = () => {
    const lineProps: LineProps = {
        style: 'solid',
        color: orangeColor,
        opacity: 100,
        width: 1
    };
    return lineProps;
};

const GetSoilTextSymbol: any = (text: string, isOrange:boolean, alpha:number) => {
    let symbolColor: any;
    if (isOrange)
    {
        symbolColor = orangeColor;
    } else {
        symbolColor = { r: 0, g: 0, b: 0, a: alpha };
    }
    const textSymbol = {
        type: 'text',
        text: text,
        color: symbolColor,
        font: {
          size: '12px',
          family: 'arial',
          weight: 'bold'
        }
      };

      return textSymbol;
};

const GetDefaultSoilsLineProps: any = (alpha:number) => {
    const lineProps: LineProps = {
        style: 'solid',
        color: { r: 105, g: 105, b: 105, a: alpha },
        opacity: 100,
        width: 1
      };

    return lineProps;
};

const WaterBlueHexColor: string = '#7ab6f5';

export { GetSoilFillProps, GetOrageLineProps, GetSoilTextSymbol, GetDefaultSoilsLineProps, WaterBlueHexColor }