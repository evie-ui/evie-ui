import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabProfileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-490h260q13 0 21.5-8.5T640-520q0-13-8.5-21.5T610-550H350q-13 0-21.5 8.5T320-520q0 13 8.5 21.5T350-490m0-160h260q13 0 21.5-8.5T640-680q0-13-8.5-21.5T610-710H350q-13 0-21.5 8.5T320-680q0 13 8.5 21.5T350-650m467 542L627-357q-19-23-45.734-36.5T525-407H135v-404q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 10.5-2.5 20.75T817-108M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-164h390q8.482 0 15.241 4T553-299L739-55z" />
  </Svg>
);
