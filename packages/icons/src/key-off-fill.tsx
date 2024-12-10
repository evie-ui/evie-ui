import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgKeyOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M816-54 509-361q-34 75-98.5 109.5T280-217q-109 0-186-77T17-480q0-66 33.5-129T158-712L54-816q-11-11-11-25.5T54-866q10-10 25-10t25 10l763 761q11 11 10 26t-11 25q-11 11-25 11t-25-11m115-427q0 9-3.5 17T917-448l-84 85q-8 7-16 10t-17 3q-10 0-18-3t-15-11l-60-58-36 36-181-180h356q10 0 18.5 3.5T880-552l38 38q7 7 10 15t3 18M280-351q52 0 87-33.5t40-76.5l-22.5-23Q362-507 335-534.5t-50-50L262-607q-41 5-76 40t-35 87q0 54 37.5 91.5T280-351" />
  </Svg>
);
