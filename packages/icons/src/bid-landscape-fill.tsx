import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBidLandscapeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95zm582-524L532-380 389-523q-14-14-33.5-14T322-523L189-391v101l166-166 144 143q14 15 33 14.5t33-15.5l206-203z" />
  </Svg>
);
