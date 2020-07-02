interface LineProps {
  style: string;
  color: any;
  opacity: number;
  width: number;
}

interface LinePropsRGBA {
  style: string;
  color: any;
  width: number;
}

interface FillProps {
  color: any;
  style: string;
  opacity: number;
}

interface FillPropsRGBA {
  color: any,
  style: string
}

export { LineProps, FillProps, FillPropsRGBA, LinePropsRGBA };