import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCropFreeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-116q0-19.75 13.675-33.375Q122.351-352 142.175-352 162-352 175.5-338.375 189-324.75 189-305v116h116q19.75 0 33.375 13.675Q352-161.649 352-141.825 352-122 338.375-108.5 324.75-95 305-95zm582 0H655q-19.75 0-33.375-13.675Q608-122.351 608-142.175 608-162 621.625-175.5 635.25-189 655-189h116v-116q0-19.75 13.675-33.375Q798.351-352 818.088-352q19.737 0 33.824 13.625Q866-324.75 866-305v116q0 39.05-27.769 66.525Q810.463-95 771-95M95-655v-116q0-39.463 27.475-67.231Q149.95-866 189-866h116q19.75 0 33.375 14.263t13.625 34Q352-798 338.375-784.5 324.75-771 305-771H189v116q0 19.75-13.675 33.375Q161.649-608 141.825-608 122-608 108.5-621.625 95-635.25 95-655m676 0v-116H655q-19.75 0-33.375-13.675Q608-798.351 608-818.088q0-19.737 13.625-33.824Q635.25-866 655-866h116q39.463 0 67.231 27.769Q866-810.463 866-771v116q0 19.75-14.263 33.375t-34 13.625Q798-608 784.5-621.625 771-635.25 771-655" />
  </Svg>
);
