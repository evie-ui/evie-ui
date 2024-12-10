import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextRotationAngledownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M477-197 111-564q-13-13-13-29t14-29q13-12 29-12.5t29 12.5l366 367v-35q0-17 12-29t30-12q17 0 29 12t12 29v129q0 20-13.5 33.5T572-114H443q-18 0-30-12t-12-30q0-18 12-29.5t30-11.5zm32-452-76 38q-12 7-24.5 4T387-619q-15-14-11-35t24-31l350-159q11-5 22.5-2.5T793-836l20 20q8 9 10 20.5t-3 22.5L662-425q-9 20-30.5 24T594-413q-10-10-12.5-23.5T586-463l34-72zm55-33 92 93 85-176-3-4z" />
  </Svg>
);
