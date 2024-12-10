import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomePinFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M374-451h67v-95h78v95h67v-173l-106-70-106 70zM479.761-79Q467-79 453.41-83.5 439.821-88 430-97q-48-40-100-90.5t-95.5-109Q191-355 163-420.5T135-555q0-159.719 104.253-255.36Q343.506-906 480-906q136.494 0 241.247 95.64Q826-714.719 826-555q0 69-28.5 134.5t-72 124Q682-238 630-187.5T531-97q-10.955 9-24.716 13.5-13.762 4.5-26.523 4.5" />
  </Svg>
);
