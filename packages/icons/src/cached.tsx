import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCached = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-140q-136 0-236-98T144-470v-46l-46 46q-10 10-23 10t-23-10q-10-10-10-23.5T52-517l105-107q14-14 34-14t34 14l106 107q10 10 10 23t-10 23q-10 10-24 10t-23-10l-46-45v44q0 97 71.5 167T480-235q18 0 34.5-1.5T547-242q19-5 38.5.5T613-219q9 17 3.5 35T593-160q-27 10-55.5 15t-57.5 5m2-580q-19 0-35.5 2t-32.5 6q-19 4-38-1t-28-22q-10-18-4-36.5t23-25.5q28-9 56.5-13.5T482-815q135 0 235.5 98.5T818-485v44l45-45q10-11 23-10.5t23 10.5q10 10 10 23t-10 24L804-333q-14 14-33.5 14T737-333L632-439q-10-10-10.5-23.5T632-487q11-11 24.5-11t23.5 11l44 44v-40q0-96-72-166.5T482-720" />
  </Svg>
);
