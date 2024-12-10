import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNorthEast = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M689-624 234-169q-15 14-33.5 14T168-169q-15-14-15-33t15-33l455-455H400q-19.75 0-33.375-13.675Q353-717.351 353-738.175 353-758 366.625-771.5 380.25-785 400-785h336q19.75 0 33.375 13.625T783-738v336q0 20.75-13.675 34.375Q755.649-354 735.825-354 716-354 702.5-367.625 689-381.25 689-402z" />
  </Svg>
);
