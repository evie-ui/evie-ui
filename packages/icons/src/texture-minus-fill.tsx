import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTextureMinusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M164-95q-29-10-44.5-27T95-168l700-698q25 7 44.5 27t25.5 46zm186 0 161-161v161zm268-60q-20 0-33.5-13.5T571-202q0-20 13.5-33.5T618-249h240q20 0 34 13.5t14 33.5q0 20-14 33.5T858-155zM95-350v-131l384-385h131zm470 41 301-301v131L696-309zM95-674v-97q0-39 27.5-67t66.5-28h97z" />
  </Svg>
);
