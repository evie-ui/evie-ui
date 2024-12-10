import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSignalCellularNodata = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M168-55q-22 0-34.5-14.5T121-102q0-8 3.5-17t11.5-17l689-689q7-8 16-11.5t17-3.5q18 0 33 13t15 35v386q-22-12-45.5-20.5T811-437v-242L282-149h282q6 26 18.5 50T612-55zm613-88-51 51q-14 13-33 13t-33-14q-15-14-15-33t15-34l50-50-51-51q-14-15-14-33.5t15-33.5q15-14 33.5-14t33.5 14l50 51 51-51q14-14 33.5-13.5T899-327q14 14 13.5 33T899-261l-51 51 51 51q13 14 13 33t-14 33q-14 14-33 14t-33-13zm-499-6 529-530-156 156q-67 67-126 126.5t-117.5 118z" />
  </Svg>
);
