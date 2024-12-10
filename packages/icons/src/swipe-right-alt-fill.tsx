import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwipeRightAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M352.434-263Q261-263 198-326.5T135-480q0-90 63.245-153.5T352-697q83.797 0 138.898 50.5Q546-596 564-527h161l-49-50q-15-15-15-33.5t14-32.5q14-15 33-15t34 15l130 130q6.909 7.167 10.455 15.694Q886-488.778 886-479.889q0 8.889-3.545 17.339Q878.909-454.1 872-447L742-317q-15.5 15-34.25 15T675-316.087Q661-330 661-349.3t14-33.7l50-50H564q-18 69-72.972 119.5Q436.057-263 352.434-263" />
  </Svg>
);
