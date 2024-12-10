import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCancelScheduleSend = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m701-229 50 49q8 8 19 7.5t19-8.5q8-8 8-19.5t-8-19.5l-50-48 53-54q8-7 8-18.5t-8-19.5q-8-8-19.5-8t-18.5 8l-52 51-52-51q-8-8-18.5-8t-18.5 8q-8 8-8 19t8 19l50 51-50 51q-9 8-9 20t9 20q8 9 19 9t20-9zm-592 22v-546q0-25 21-38.5t46-4.5l667 285q-24-3-47-6t-60-3q-27 0-52.5 2T642-508L191-699v146l254 73-254 71v145l288-121q-11 22-18 48t-9 42q0 3 .5 6t1.5 7L175-165q-24 10-45-3.5T109-207M701-80q-77 0-133.5-55.5T511-269q0-79 56.5-135T701-460q78 0 134 56t56 135q0 78-56 133.5T701-80M191-385v-314 435z" />
  </Svg>
);
