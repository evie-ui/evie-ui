import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInHomeMode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-143v-441H43l437-358 437 358H811v71h-94v-112L480-820 243-625v388h106v94zm445 87L426-224l66-66 102 102 215-215 66 66z" />
  </Svg>
);
