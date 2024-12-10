import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSendAndArchive = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m681-228-58-57q-6-6-13.5-6t-13.5 6q-6 5-6 13.5t6 14.5l72 74q14 14 33.5 14t33.5-14l74-74q6-6 5.5-14t-6.5-14q-6-6-14-6t-14 6l-58 57v-143q0-8-6-14t-14-6q-8 0-14.5 6t-6.5 14zm-572 21v-546q0-25 21-38.5t46-4.5l667 285q-24-3-47-6t-60-3q-27 0-52.5 2T642-508L191-699v146l254 73-254 71v145l288-121q-11 22-18 48t-9 42q0 3 .5 6t1.5 7L175-165q-24 10-45-3.5T109-207M701-80q-77 0-133.5-55.5T511-269q0-79 56.5-135T701-460q78 0 134 56t56 135q0 78-56 133.5T701-80M191-385v-314 435z" />
  </Svg>
);
