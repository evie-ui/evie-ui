import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalActivityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-384 54 43q14 10 28-.5t10-26.5l-22-68 54-46q13-10 8-26t-22-16h-64l-24-66q-5-16-22-16t-22 16l-24 66h-64q-17 0-22.5 16t7.5 26l55 46-21 69q-5 16 9 26t28 0zM149-135q-40 0-67-27t-27-67v-137q0-9 5-16.5T74-393q30-9 48.5-34t18.5-53q0-28-18.5-53.5T74-567q-9-3-14-10.5T55-595v-136q0-40 27-67.5t67-27.5h662q40 0 67.5 27.5T906-731v137q0 9-5.5 16.5T886-567q-30 8-48 33.5T820-480q0 28 18 53t48 34q9 3 14.5 10.5T906-366v137q0 40-27.5 67T811-135z" />
  </Svg>
);