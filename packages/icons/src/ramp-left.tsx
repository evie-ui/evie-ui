import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRampLeft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M435-142v-544l-57 57q-14 14-33 14t-33-14q-14-14-14-33t14-33l136-137q7-7 16-11t18-4q9 0 18 4t16 11l136 137q14 14 14 33t-14 33q-14 14-33 14.5T586-629l-57-57v121q0 78 42 140.5T735-283q17 13 22.5 32t-8.5 33q-16 15-37.5 17T671-212q-45-27-81-57.5T529-331v189q0 20-13.5 33.5T482-95q-20 0-33.5-13.5T435-142" />
  </Svg>
);
