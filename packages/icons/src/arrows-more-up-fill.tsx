import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowsMoreUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M506.825-180Q487-180 473.5-193.625 460-207.25 460-227v-313H147q-19.75 0-33.375-13.675Q100-567.351 100-587.175 100-607 113.625-620.5 127.25-634 147-634h360q19.75 0 33.375 13.625T554-587v360q0 19.75-13.675 33.375Q526.649-180 506.825-180m225-224Q711-404 697.5-417.625 684-431.25 684-452v-312H372q-20.75 0-34.375-13.675Q324-791.351 324-812.175 324-832 337.625-845.5 351.25-859 372-859h360q19.75 0 33.375 13.625T779-812v360q0 20.75-13.675 34.375Q751.649-404 731.825-404" />
  </Svg>
);
