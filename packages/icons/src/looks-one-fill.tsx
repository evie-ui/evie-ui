import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLooksOneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-612v300q0 15.15 10.395 25.075 10.394 9.925 25.5 9.925Q532-277 542-287.425T552-313v-323q0-20-13.5-33.5T505-683h-72q-15.15 0-25.075 9.895-9.925 9.894-9.925 25Q398-633 408.425-622.5T434-612zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
