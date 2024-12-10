import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMan3Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M397-109v-230h-33q-19.75 0-33.375-13.625T317-386v-189q0-38.75 27.625-66.375T411-669h138q38.75 0 66.375 27.625T643-575v189q0 19.75-13.625 33.375T596-339h-33v230q0 19.75-13.646 33.375T515.927-62h-72.146Q424-62 410.5-75.625T397-109m49-645-26-27q-15-14-15-33.5t15-33.5l26-27q14-14 34-14t34 14l27 27q14 14 14 33.5T541-781l-27 27q-14 14-34 14t-34-14" />
  </Svg>
);
