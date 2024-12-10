import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChairAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M169-133v-272q0-40 27-67t68-27h50v-68h-50q-41 0-68-27t-27-67v-119q0-40 27-67.5t68-27.5h432q41 0 68 27.5t27 67.5v119q0 40-27 67t-68 27h-50v68h50q41 0 68 27t27 67v272q0 20-13.5 33.5T744-86q-21 0-34.5-13.5T696-133v-63H264v63q0 20-13.5 33.5T217-86q-21 0-34.5-13.5T169-133m205-366h212v-68H374z" />
  </Svg>
);
