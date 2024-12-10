import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLastPage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M397-480 238-639q-14-14-13.5-33t14.5-33q14-14 33.5-14t33.5 14l191 191q7 7 11 16t4 18q0 9-4 18t-11 16L305-254q-14 14-33 13.5T239-255q-14-14-14-33.5t14-33.5zm293-264q20 0 33.5 13.5T737-697v434q0 20-13.5 33.5T690-216q-20 0-33.5-13.5T643-263v-434q0-20 13.5-33.5T690-744" />
  </Svg>
);
