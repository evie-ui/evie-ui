import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGradient = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M439-440v-84h82v84zm-84 83v-83h84v83zm166 0v-83h83v83zm83-83v-84h84v84zm-332 0v-84h83v84zM189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h582q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95zm83-94h83v-84h-83zm167 0h82v-84h-82zm332 0v-84zm-582-84h83.5v-84h82.833v84h82.834v-84H521v84h83.5v-84H688v84h83v-83.667h-83v-83.666h83V-771H189v331h83v83.5h-83zm0 85v-583zm582-252v83zM604-273v84h84v-84z" />
  </Svg>
);
