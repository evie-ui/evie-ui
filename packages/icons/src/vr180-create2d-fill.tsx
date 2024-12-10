import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVr180Create2DFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M497-55q-39 0-66.5-27.5T403-149v-313q0-39 27.5-67t66.5-28h314q39 0 67 28t28 67v313q0 39-28 66.5T811-55zm40-128h236q7 0 11-6.5t-1-12.5l-66-86q-3-5-9-4.5t-9 5.5l-63 84-48-60q-3-5-9.5-4t-9.5 5l-42 60q-4 6-1 12.5t11 6.5m-194-52q-123-27-206-121T54-576q0-137 96-233.5T383-906q125 0 218.5 83T721-617H497q-64 0-109 45t-45 110z" />
  </Svg>
);
