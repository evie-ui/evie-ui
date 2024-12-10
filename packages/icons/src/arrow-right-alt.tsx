import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowRightAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M646-435H182q-20 0-33.5-13.5T135-482q0-20 13.5-33.5T182-529h464L526-650q-14-13-13.5-32.5T527-716q13-13 32-12.5t33 13.5l200 199q7 7 11 16t4 18q0 9-4 18t-11 16L593-250q-14 13-33 13.5T528-250q-14-13-14-33t14-34z" />
  </Svg>
);
