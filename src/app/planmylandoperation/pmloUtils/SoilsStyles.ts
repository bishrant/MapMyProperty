import { FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { HexToRGB } from 'src/app/shared/utils/Colors';

const GetSoilFillProps: any = (hexColor:string) => {
    const rgbObject: any = HexToRGB(hexColor);
    const fillProps: FillProps = {
        color: {r: rgbObject.r, g: rgbObject.g, b: rgbObject.b, a: 1 },
        style: 'solid',
        opacity: 100
    };

    return fillProps;
};

export { GetSoilFillProps }