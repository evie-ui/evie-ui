import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesktopMac = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407-226H149q-39.05 0-66.525-27.475Q55-280.95 55-320v-451q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v451q0 39.05-27.769 66.525Q850.463-226 811-226H554l77.053 79.053q.947.73 6.947 15.175v14.446q0 9.63-6.386 15.978Q625.229-95 615-95H338.301q-7.444 0-11.372-4.059Q323-103.118 323-110.206v-23.627q0-.834 5-12.167zM149-387h662v-384H149zm0 0v-384z" />
  </Svg>
);
