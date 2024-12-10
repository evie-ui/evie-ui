import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCurtainsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M126-181v-598q0-40 27.5-67.5T221-874h518q40 0 67.5 27.5T834-779v598h33q20 0 33.5 13.5T914-134q0 21-13.5 34.5T867-86H94q-21 0-34.5-13.5T46-134q0-20 13.5-33.5T94-181zm132-298q82 24 129.5 95T451-230h59q14-84 61.5-156T701-481q-81-24-129-94.5T510-729h-60q-14 84-62 155.5T258-479" />
  </Svg>
);
