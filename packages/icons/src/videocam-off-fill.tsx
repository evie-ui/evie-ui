import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVideocamOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M865-316 746-435v122L233-826h418q39 0 67 28t28 67v206l119-119q10-11 25.5-5t15.5 21v296q0 15-15.5 21t-25.5-5M834-38 49-824q-11-11-11.5-25T49-874q11-12 25-12t25 12L886-88q11 12 10.5 26T885-37q-12 11-26 11t-25-12M148-826l596 597v19q-6 32-32.5 53.5T651-135H149q-39 0-66.5-27.5T55-229v-502q0-34 21.5-60.5T130-824z" />
  </Svg>
);
