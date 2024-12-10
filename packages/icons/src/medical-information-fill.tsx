import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMedicalInformationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M290-307v43q0 18 12 29.5t30 11.5q18 0 29.5-12t11.5-30v-42h43q18 0 29.5-12t11.5-30q0-18-11.5-29.5T416-390h-43v-43q0-18-11.5-29.5T332-474q-18 0-30 11.5T290-433v43h-43q-18 0-29.5 11.5T206-349q0 18 12 30t30 12zm257-70h172q15 0 25-10.5t10-24.5q0-15-10-25t-25-10H546q-15 0-25 10t-10 25q0 14 10.5 24.5T547-377m-1 135h93q15 0 25-10t10-25q0-14-10-24.5T639-312h-93q-15 0-25 10.5T511-277q0 15 10 25t25 10M149-55q-39 0-66.5-27.5T55-149v-462q0-39 27.5-67t66.5-28h216v-122q0-34 21.5-56t56.5-22h75q34 0 56 22t22 56v122h215q39 0 67 28t28 67v462q0 39-28 66.5T811-55zm303-553h57v-211h-57z" />
  </Svg>
);
