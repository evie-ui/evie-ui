import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeadphonesBatteryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M179-229h-35q-34.062 0-57.531-23.469T63-310v-159q0-107 75-182t182-75q107 0 182 75t75 182v159q0 34.062-23.469 57.531T496-229h-35q-19.75 0-33.375-13.625T414-276v-86q0-19.75 13.625-33.375T461-409h53v-60q0-80-56.5-137T320-663q-81 0-137.5 57T126-469v60h53q19.75 0 33.375 13.625T226-362v86q0 19.75-13.625 33.375T179-229m564-464v-10q0-9 7.6-16t16.4-7h24q9 0 16 7t7 16v10h44q17.425 0 28.213 11.287Q897-670.425 897-654v387q0 16-10.787 27-10.788 11-28.213 11H703q-16 0-27-11t-11-27v-387q0-16.425 11-27.713Q687-693 703-693z" />
  </Svg>
);
