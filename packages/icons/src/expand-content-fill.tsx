import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgExpandContentFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M277-277h133q19.75 0 33.375 13.675Q457-249.649 457-229.825 457-210 443.375-196.5 429.75-183 410-183H230q-19.75 0-33.375-13.625T183-230v-180q0-19.75 13.675-33.375Q210.351-457 230.175-457 250-457 263.5-443.375 277-429.75 277-410zm406-406H550q-19.75 0-33.375-13.675Q503-710.351 503-730.175 503-750 516.625-763.5 530.25-777 550-777h180q19.75 0 33.375 13.625T777-730v180q0 19.75-13.675 33.375Q749.649-503 729.825-503 710-503 696.5-516.625 683-530.25 683-550z" />
  </Svg>
);
