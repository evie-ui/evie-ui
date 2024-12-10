import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatClearFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M535-529 434-629l24-56h-79l-93-92h464q28 0 47.5 19.5T817-710q0 28-19.5 47.5T750-643H584zM789-73 476-387l-74 173q-9 18-25 28.5T341-175q-37 0-56.5-29.5T279-268l94-222L73-790q-11-10-11-24t11-25q11-11 25-11t25 11l716 716q11 11 11 25t-11 25q-11 11-25 11t-25-11" />
  </Svg>
);
