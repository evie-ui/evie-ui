import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableRestaurant = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M166-587h628l-39-136H207zm504 95H291l-15 93h408zM150-197l46-295h-79q-28 0-45-23t-9-50l60-211q4-18 19-29.5t35-11.5h606q19 0 34 11.5t21 29.5l60 211q8 27-9 50t-46 23h-79l47 295q3 22-11 38t-35 16q-17 0-30-11t-16-28l-19-123H261l-20 123q-3 17-16 28t-29 11q-22 0-35.5-16T150-197" />
  </Svg>
);
