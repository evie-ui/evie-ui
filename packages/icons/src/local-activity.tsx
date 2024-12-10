import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalActivity = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-384 54 43q14 10 28-.5t10-26.5l-22-68 54-46q13-10 8-26t-22-16h-64.301L502-590q-5.242-16-22.121-16Q463-606 458-590l-23.683 66H370q-17 0-22.5 16t7.5 26l55 46-21 69q-5 16 9 26t28 0zM149-135q-40.05 0-67.025-26.975Q55-188.95 55-229v-137q0-9 5-16.308 5-7.307 14-10.384Q104-402 122.5-427t18.5-53q0-28-18.5-53.5T74-567.216q-9-3.054-14-10.27-5-7.217-5-17.514v-136q0-40.463 26.975-67.731Q108.95-826 149-826h662q40.463 0 67.731 27.269Q906-771.463 906-731v137q0 9-5.28 16.389Q895.44-570.222 886-567q-30 8-48 33.5T820-480q0 28 18 53t48 34q9 3 14.5 10.5T906-366v137q0 40.05-27.269 67.025Q851.463-135 811-135zm0-94h662v-96q-38-27-62-67.5T725-480q0-48 24-88.5t62-66.5v-96H149v96q40 26 63 66.5t23 88.5q0 47-23 87.5T149-325zm331-251" />
  </Svg>
);
