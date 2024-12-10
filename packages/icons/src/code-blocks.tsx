import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCodeBlocks = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m331-480 69-69.487q9-8.896 9-21.757 0-12.86-9-21.756-9-9-21.833-9-12.834 0-22.167 9l-80 79q-6.909 7.167-10.955 16.328Q261-488.511 261-479.756q0 8.756 4.045 17.706Q269.091-453.1 276-446l82 82q9.333 9 22.167 8.5Q393-356 402-365.176q9-9.177 9-22.412 0-13.236-9-22.412zm298 0-71 71q-9 9-9 22t9 22q9 9 21.833 9 12.834 0 22.167-9l82-81q6.909-7.167 10.955-16.328Q699-471.489 699-480.244q0-8.756-4.045-17.706Q690.909-506.9 684-514l-82-82q-3.833-4-10.125-6.5t-11.833-2.5q-5.542 0-10.792 2.544t-9.917 6.432Q550-586.247 550-573.212q0 13.036 9 22.212zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
