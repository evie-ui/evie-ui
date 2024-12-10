import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M660-413 254-819v-50q9-14 32.5-24t61.5-10h274q37 0 62.5 30t11.5 65l-53 155h66q40 0 55.5 32t-9.5 68zM842-30 576-295 442-101q-8 11-18.5 13.5T403-88q-11-4-18-12t-7-21v-227h-43q-34 0-57.5-23.5T254-429v-188L30-842l50-50L892-80z" />
  </Svg>
);
