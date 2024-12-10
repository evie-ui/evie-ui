import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgExpandMoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-341q-9 0-18-4t-16-11L249-553q-14-14-14-33t14-33q14-14 33.5-14t33.5 14l164 164 164-164q14-14 33-14t33 14q14 14 14 33.5T710-552L514-356q-7 7-16 11t-18 4" />
  </Svg>
);
