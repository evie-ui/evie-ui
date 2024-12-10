import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCarpenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M652-53q-14.25 13.13-31.189 19.565Q603.872-27 585.18-27q-18.934 0-36.171-6.391Q531.773-39.783 518-53l-68-69q-14-13-21.583-26.707Q420.833-162.415 419-176q-3-13 .5-28t13.5-32l13-17L68-786l178-177 591 590q14 14 21 31.064t7 34.756q0 19.18-7 36.18t-21 31zm-68-66 187-188-69-68-187 187z" />
  </Svg>
);
