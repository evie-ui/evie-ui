import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHangoutVideoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M293-324h218q20 0 33.5-13.5T558-371v-76l100 78q18 15 37.5 5t19.5-33v-166q0-23-19.5-33t-37.5 4l-100 79v-76q0-20-13.5-33.5T511-636H293q-20 0-33.5 13.5T246-589v218q0 20 13.5 33.5T293-324M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-135z" />
  </Svg>
);
