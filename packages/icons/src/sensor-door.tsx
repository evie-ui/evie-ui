import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSensorDoor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M247-73q-38.775 0-66.388-27.612Q153-128.225 153-167v-626q0-38.775 27.612-66.387Q208.225-887 247-887h466q38.775 0 66.387 27.613Q807-831.775 807-793v626q0 38.775-27.613 66.388Q751.775-73 713-73zm0-94h466v-626H247zm344.177-253q25.882 0 43.852-18.118 17.971-18.117 17.971-44Q653-508 635.412-526q-17.588-18-43.765-18-26.176 0-43.912 18.323Q530-507.353 530-481.176 530-455 547.647-437.5q17.647 17.5 43.53 17.5M247-793v626z" />
  </Svg>
);
