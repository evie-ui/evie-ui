import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLooksTwoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M425-348v-98h110q32 0 51.5-20t19.5-52v-94q0-32-19.5-51.5T535-683H389q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q375.1-612 390-612h145v94H425q-32 0-51.5 20T354-446v122q0 19.75 13.625 33.375T401-277h170q14.9 0 24.95-10.57Q606-298.14 606-313.07T595.95-338Q585.9-348 571-348zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);