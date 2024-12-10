import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMoveDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M93-532q0 83 61.5 138.5T301-340l-63-62q-13-13-13-29.5t13-29.5q12-12 29.5-12t29.5 12l123 122q14 14 13.5 33T420-273L298-152q-13 14-29 13.5T240-152q-13-13-13-30.5t13-30.5l52-50q-115 4-198.5-74.5T10-532q0-123 87.5-208.5T309-826h84q17 0 29 12t12 29q0 17-12 29t-29 12h-84q-91 0-153.5 61T93-532m468 397q-20 0-33.5-13.5T514-182v-211q0-20 13.5-33.5T561-440h298q20 0 33.5 13.5T906-393v211q0 20-13.5 33.5T859-135zm0-385q-20 0-33.5-13.5T514-567v-211q0-20 13.5-34t33.5-14h298q20 0 33.5 14t13.5 34v211q0 20-13.5 33.5T859-520zm48-95h203v-116H609z" />
  </Svg>
);
