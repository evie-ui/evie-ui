import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMovingMinistryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M42-108q-20 0-33.5-13.5T-5-155v-672q0-20 13.5-34T42-875h514q20 0 33.5 14t13.5 34v672q0 20-13.5 33.5T556-108H358v-184H242v184zm128-326h87v-87h-87zm0-172h87v-94h-87zm172 172h87v-87h-87zm0-172h87v-94h-87zm301 126q0-20 13.5-33.5T690-527h94l-20-21q-12-15-11.5-33t13.5-31q15-15 33.5-15t33.5 15l98 98q14 14 14 34t-14 34l-99 99q-14 14-33 14t-33-14q-13-14-13.5-32.5T764-412l20-21h-94q-20 0-33.5-13.5T643-480" />
  </Svg>
);
