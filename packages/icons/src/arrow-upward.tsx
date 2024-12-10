import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowUpward = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-645 235-447q-14.091 14-33.545 14.5-19.455.5-33.89-13.5Q153-460 153.5-479.818 154-499.636 168-514l278-278q7.167-6.909 16.194-10.955Q471.222-807 480.111-807q8.889 0 17.839 4.045Q506.9-798.909 514-792l279 279q14 15.5 14 34.25T793-446q-15 14-33.933 14-18.934 0-33.067-14L527-645v463q0 20-13.5 33.5T480-135q-20 0-33.5-13.5T433-182z" />
  </Svg>
);
