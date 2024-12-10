import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOpenInBrowserFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95H635q-20.75 0-34.375-13.675Q587-122.351 587-142.175 587-162 600.625-175.5 614.25-189 635-189h136v-510H189v510h137q19.75 0 33.375 13.675Q373-161.649 373-141.825 373-122 359.375-108.5 345.75-95 326-95zm244-47v-223l-40 39q-13.133 14-32.067 14.5Q342-311 327.609-326 314-339 314-359t14-34l118-119q7.167-6.909 16.328-10.955Q471.489-527 480.244-527q8.756 0 17.706 4.045Q506.9-518.909 514-512l119 119q14 14 14 33t-13.609 33Q619-312 599.567-312.5 580.133-313 566-327l-39-38v223q0 19.75-13.675 33.375Q499.649-95 479.825-95 460-95 446.5-108.625 433-122.25 433-142" />
  </Svg>
);