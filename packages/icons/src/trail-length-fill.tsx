import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrailLengthFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M311-263q-19.75 0-33.375-13.675Q264-290.351 264-310.175 264-330 277.625-343.5 291.25-357 311-357h196q-14-15-25-36t-13-40h-78q-19.75 0-33.375-13.675Q344-460.351 344-480.175 344-500 357.625-513.5 371.25-527 391-527h78q2-18 12.5-39t25.5-37H150q-19.75 0-33.375-13.675Q103-630.351 103-650.175 103-670 116.625-683.5 130.25-697 150-697h530q90 0 153.5 63.5T897-480q0 90-63.5 153.5T680-263zM110-433q-19.75 0-33.375-13.675Q63-460.351 63-480.175 63-500 76.625-513.5 90.25-527 110-527h157q19.75 0 33.375 13.675Q314-499.649 314-479.825 314-460 300.375-446.5 286.75-433 267-433zm40 170q-19.75 0-33.375-13.675Q103-290.351 103-310.175 103-330 116.625-343.5 130.25-357 150-357h37q19.75 0 33.375 13.675Q234-329.649 234-309.825 234-290 220.375-276.5 206.75-263 187-263z" />
  </Svg>
);
