import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSkipNext = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M693-240v-480q0-19.75 13.675-33.375Q720.351-767 740.175-767 760-767 773.5-753.375 787-739.75 787-720v480q0 19.75-13.675 33.375Q759.649-193 739.825-193 720-193 706.5-206.625 693-220.25 693-240m-520-42v-396q0-20.5 14-33.75T220-725q7 0 14 2.5t13 6.5l285 197q11 7 16 17.296 5 10.297 5 21.704t-5 21.704Q543-448 532-441L247-244q-6 4-13 6.5t-14 2.5q-19 0-33-13.25T173-282m94-90 156-108-156-108z" />
  </Svg>
);
