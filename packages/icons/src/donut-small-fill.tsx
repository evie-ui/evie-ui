import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDonutSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M578-520q-8-19-23-32.5T520-572v-332q154 15 262 123t122 261zM438-56Q274-71 165-191T56-476q0-165 109-288.5T438-904v332q-28 12-45.5 38.5T375-476q0 30 17.5 55.5T438-384zm82 0v-328q20-6 36-20t22-34h326q-15 153-123 260.5T520-56" />
  </Svg>
);
