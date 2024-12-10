import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWindowSensor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M887.825-603Q868-603 854.5-616.625 841-630.25 841-650v-160q0-19.75 13.675-33.375Q868.351-857 888.175-857 908-857 921.5-843.375 935-829.75 935-810v160q0 19.75-13.675 33.375Q907.649-603 887.825-603M96-103v-754h675v754zm95-424h185v-40h115v40h185v-236H191zm0 330h485v-236H191zm0 0h485z" />
  </Svg>
);
