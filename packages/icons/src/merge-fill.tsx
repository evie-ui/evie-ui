import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMergeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-334 274-128q-14 15-33 14.5T208-128q-14-14-14-32.5t14-33.5l190-190q21-21 28-38t7-53v-211l-57 57q-14 15-33 15t-33-15q-14-14-14-32.5t14-33.5l136-136q14-14 34-14t34 14l136 136q14 15 14 33.5T650-629q-14 15-33 15t-33-14l-57-58v211q0 36 7 53t28 38l190 190q14 15 14 34t-14 32q-14 15-33 15t-33-15z" />
  </Svg>
);
