import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgConnectedTv = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M209-329h82q-4-32.35-26.825-56.175Q241.35-409 209-411zm122 0h60q0-76-53.235-129T209-511v60q51 0 86.5 35.655T331-329m100 0h60q0-57.966-22.373-109.68-22.374-51.714-60.303-89.644-37.93-37.929-89.644-60.303Q266.966-611 209-611v60q93 0 157.5 64.5T431-329M149-175q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.05-27.769 66.525Q850.463-175 811-175H644v33q0 19.75-14.188 33.375Q615.625-95 596-95H364q-19.75 0-33.375-13.625T317-142v-33zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);