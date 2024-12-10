import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTvOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m886-213-75-74v-484H327l-94-95h578q39.463 0 67.231 27.769Q906-810.463 906-771v499q0 18.489-7 34.245Q892-222 886-213M142-857l85 86h-78v502h479L38-858q-11-11-10-26t10.956-24.957Q50-920 64-920t25 11l774 772q10 11 10 25t-11 25q-11 11-25.5 11T811-87l-89-88h-78v33q0 19.75-14.188 33.375Q615.625-95 596-95H364q-19.75 0-33.375-13.625T317-142v-33H149q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-34 22.5-60t46.5-26zm430 331" />
  </Svg>
);
