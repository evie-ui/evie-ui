import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBackgroundGridSmall = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-189h86v-86h-86zm158 0h97v-86h-97zm169 0h98v-86h-98zm170 0h85v-86h-85zM189-686h86v-85h-86zm0 170h86v-98h-86zm0 169h86v-97h-86zm158-339h97v-85h-97zm0 170h97v-98h-97zm0 169h97v-97h-97zm169-339h98v-85h-98zm0 170h98v-98h-98zm0 169h98v-97h-98zm170-339h85v-85h-85zm0 170h85v-98h-85zm0 169h85v-97h-85zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
