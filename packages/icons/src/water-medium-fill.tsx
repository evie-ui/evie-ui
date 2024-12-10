import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWaterMediumFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M236-482q48-24 101.5-38T443-534q32 0 63 4.5t60 12.5q51 15 78 19.5t57 4.5h25l34-318H200zm37 427q-36 0-63-23.5T180-138l-74-662q-5-43 23.5-74.5T201-906h559q42 0 70.5 31.5T855-800l-74 662q-4 36-30.5 59.5T688-55z" />
  </Svg>
);
