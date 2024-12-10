import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrailLengthShort = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M600-263q-75 0-134.5-46.5T389-433H190q-19.75 0-33.375-13.675Q143-460.351 143-480.175 143-500 156.625-513.5 170.25-527 190-527h198.809Q392-549 403-570t26-33H270q-19.75 0-33.375-13.675Q223-630.351 223-650.175 223-670 236.625-683.5 250.25-697 270-697h330q90 0 153.5 63.5T817-480q0 90-63.5 153.5T600-263m-.235-94Q651-357 687-392.765q36-35.764 36-87Q723-531 687.235-567q-35.764-36-87-36Q549-603 513-567.235q-36 35.764-36 87Q477-429 512.765-393q35.764 36 87 36M310-263q-19.75 0-33.375-13.675Q263-290.351 263-310.175 263-330 276.625-343.5 290.25-357 310-357h36q19.75 0 33.375 13.675Q393-329.649 393-309.825 393-290 379.375-276.5 365.75-263 346-263zm290-217" />
  </Svg>
);
