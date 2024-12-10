import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStairsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407-383h73q12.75 0 21.375-8.625T510-413v-103h73q12.75 0 21.375-8.625T613-546v-104h67q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T680-710h-97q-12.75 0-21.375 8.625T553-680v103h-73q-12.75 0-21.375 8.625T450-547v103h-73q-12.75 0-21.375 8.625T347-414v104h-67q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T280-250h97q12.75 0 21.375-8.625T407-280zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
