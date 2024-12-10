import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExpandLessFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-520 316-356q-14 14-33.5 14.5T249-355q-14-14-14-33.5t14-33.5l197-197q7-7 16-11t18-4q9 0 18 4t16 11l196 196q14 14 14.5 33T711-357q-14 14-33.5 14T644-357z" />
  </Svg>
);
