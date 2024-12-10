import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScheduleSend = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M109-207v-546q0-25 21-38.5t46-4.5l667 285q-24-3-47-6t-60-3q-27 0-52.5 2T642-508L191-699v146l254 73-254 71v145l288-121q-11 22-18 48t-9 42q0 3 .5 6t1.5 7L175-165q-24 10-45-3.5T109-207M701-80q-77 0-133.5-55.5T511-269q0-79 56.5-135T701-460q78 0 134 56t56 135q0 78-56 133.5T701-80m23-201v-99q0-10-7-17.5t-18-7.5q-11 0-19 8t-8 18v102q0 10 3.5 18t10.5 15l67 67q7 7 18.5 7t19.5-8q7-8 6.5-19.5T790-217zM191-385v-314 435z" />
  </Svg>
);
