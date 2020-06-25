import { LineProps, FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';

const GetDefaultLineProps: any = () => {
    const lineProps: LineProps = {
        style: 'dash',
        color: null,
        opacity: 100,
        width: 0,
      };

    return lineProps;
};

const GetStreamsLineProps: any = (alpha: number) => {
    const lineProps: LineProps = {
        style: 'dash',
        color: { r: 51, g: 102, b: 255, a: alpha },
        opacity: 100,
        width: 3,
      };

    return lineProps;
};

const GetWetlandsProps: any = (alpha: number) => {
    const fillProps: FillProps = {
        color: { r: 102, g: 153, b: 205, a: alpha },
        style: 'solid',
        opacity: 100
      };

    return fillProps;
};

const GetSMZProps: any = (alpha: number) => {
    const fillProps: FillProps = {
        color: { r: 255, g: 255, b: 0, a: alpha },
        style: 'solid',
        opacity: 100
      };

    return fillProps;
};

const GetSlopeProps: any = (alpha: number) => {
    const fillProps: FillProps = {
        color: { r: 255, g: 0, b: 0, a: alpha },
        style: 'solid',
        opacity: 100
      };

    return fillProps;
};

const GetWetlandsBufferProps: any = (alpha: number) => {
    const fillProps: FillProps = {
        color: { r: 68, g: 79, b: 137, a: alpha },
        style: 'solid',
        opacity: 100
      };

    return fillProps;
};

export { 
    GetDefaultLineProps, 
    GetStreamsLineProps, 
    GetWetlandsProps, 
    GetSMZProps, 
    GetSlopeProps, 
    GetWetlandsBufferProps 
}