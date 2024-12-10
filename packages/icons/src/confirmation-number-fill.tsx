import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgConfirmationNumberFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-40 0-67-27t-27-67v-137q0-9 5-16.5T74-393q30-9 48.5-34t18.5-53q0-28-18.5-53.5T74-567q-9-3-14-10.5T55-595v-136q0-40 27-67.5t67-27.5h662q40 0 67.5 27.5T906-731v137q0 9-5.5 16.5T886-567q-30 8-48 33.5T820-480q0 28 18 53t48 34q9 3 14.5 10.5T906-366v137q0 40-27.5 67T811-135zm331-154q15 0 25.5-10.5T516-324q0-15-10.5-25.5T480-360q-14 0-25 10.5T444-324q0 14 11 24.5t25 10.5m0-155q15 0 25.5-11t10.5-25q0-15-10.5-25.5T480-516q-14 0-25 10.5T444-480q0 14 11 25t25 11m0-156q15 0 25.5-11t10.5-25q0-15-10.5-25T480-671q-14 0-25 10t-11 25q0 14 11 25t25 11" />
  </Svg>
);
