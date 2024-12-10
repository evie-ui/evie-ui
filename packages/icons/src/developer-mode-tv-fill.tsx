import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeveloperModeTvFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m156-520 92-93q10-11 10.5-24.5T248-663q-11-11-25.5-11T197-663L88-553q-15 14-15 33.5T88-486l109 109q11 11 25 11t26-11q11-12 11-26t-11-25zm648 0-91 93q-11 11-11.5 24.5T713-377q10 11 24.5 11t25.5-11l110-110q14-14 14-33.5T873-554L764-663q-12-11-26-11t-25 11q-12 12-12 26t12 25zM364-95q-20 0-33.5-13.5T317-142v-33H149q-39 0-66.5-28T55-269v-502q0-38 27.5-66.5T149-866h662q38 0 66.5 28.5T906-771v502q0 38-28.5 66T811-175H644v33q0 20-14 33.5T596-95z" />
  </Svg>
);