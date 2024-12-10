import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardDoubleArrowLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m316-481 166 165q14 14 13.5 33T482-250q-15 14-33.5 14T416-250L218-447q-7-7-11-16t-4-18q0-9 4-18t11-16l198-197q14-14 33-14t33 14q14 14 14 33t-14 33zm263 0 165 165q14 14 13.5 33T744-250q-15 14-33.5 14T678-250L480-447q-7-7-11-16t-4-18q0-9 4-18t11-16l198-197q14-14 33-14t33 14q14 14 14 33t-14 33z" />
  </Svg>
);
