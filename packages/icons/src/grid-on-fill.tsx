import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGridOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95h122v-217H95v123q0 39.8 27.1 66.9Q149.2-95 189-95m182 0h218v-217H371zm278 0h122q40.213 0 67.606-27.1Q866-149.2 866-189v-123H649zM95-372h216v-216H95zm276 0h218v-216H371zm278 0h217v-216H649zM95-648h216v-218H189q-39.8 0-66.9 27.394Q95-811.213 95-771zm276 0h218v-218H371zm278 0h217v-123q0-40.213-27.394-67.606Q811.213-866 771-866H649z" />
  </Svg>
);
