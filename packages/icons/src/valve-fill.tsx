import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgValveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-626v-160H273v-95h414v95H527v160zM120-57v-379h94v40h116v-106h-40v-94h381v94h-40v106h115v-40h95v379h-95v-40H214v40z" />
  </Svg>
);
