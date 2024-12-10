import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTvOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M886-213 233-866h578q39 0 67 28t28 67v499q0 18-7 34t-13 25M142-857v102L38-858q-11-11-10.5-25.5T39-909q11-11 25-11t25 11l774 772q10 11 10 25t-11 25q-11 11-25.5 11T811-87l-88-88h-79v44q0 21-13.5 34.5T597-83H364q-20 0-33.5-13.5T317-131v-44H149q-39 0-66.5-27.5T55-269v-502q0-34 22.5-60t46.5-26z" />
  </Svg>
);
