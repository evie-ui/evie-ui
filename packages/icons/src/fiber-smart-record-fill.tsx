import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFiberSmartRecordFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M347-175q-127.657 0-216.829-88.831Q41-352.662 41-479.831T130.037-696.5q89.036-89.5 216.5-89.5Q474-786 562.5-696.5T651-479.831q0 127.169-88.38 216Q474.239-175 347-175m394-34q-26 13-47-1.311T673-253q0-11 7-22t18-17q58-22 92.5-74.5T825-483q0-64-34.5-116T698-674q-11-5-18-16.21-7-11.209-7-22.79 0-28 21-42t49 0q75 29 125.5 103.5T919-483q0 94-51 168.5T741-209" />
  </Svg>
);
