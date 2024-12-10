import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwipeUpAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-135q-90 0-153.5-63.622Q263-262.243 263-353.288q0-83.28 50.5-137.996Q364-546 433-565v-161l-50 50q-15.5 14-33.75 14.5T317-676q-15-14-15-33t15-33l130-131q7.16-6 15.68-10t17.4-4q8.88 0 17.4 4 8.52 4 15.52 10l130 131q15 14 15 32.974 0 18.973-14.087 33.5Q630-661 610.7-661T577-676l-50-50v161q69 19 119.5 73.716Q697-436.568 697-353.288q0 91.045-63.5 154.666Q570-135 480-135" />
  </Svg>
);
