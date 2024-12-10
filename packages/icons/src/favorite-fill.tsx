import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFavoriteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479-118q-18 0-34.5-6T415-143l-54-51Q238-306 146.5-413.5T55-643q0-101 67-169t167-68q50 0 99 21.5t91 73.5q47-52 93-73.5t97-21.5q101 0 169 68t68 169q0 122-93 229.5T598-193l-54 50q-13 13-30 19t-35 6" />
  </Svg>
);
