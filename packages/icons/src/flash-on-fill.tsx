import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M403-88q-11-4-18-12t-7-21v-227h-43q-34 0-57.5-23.5T254-429v-379q0-40 27.5-67.5T348-903h274q37 0 62.5 30t11.5 65l-53 155h66q40 0 55.5 32t-9.5 68L442-101q-8 11-18.5 13.5T403-88" />
  </Svg>
);
