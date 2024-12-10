import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrendingDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M746-312 543-517 442-416q-27.934 28-66.467 28T310-416L89-637q-15-14-14.5-33.5T89-704q14-14 33.5-14t33.5 14l219 220 101-101q26.934-28 65.467-28T608-585l204 205v-69q0-19.325 14-32.663Q840-495 859.228-495q20.228 0 33.5 13.337Q906-468.325 906-449v184q0 19.75-14.125 33.375T858-218H675q-19.75 0-33.375-13.675Q628-245.351 628-265.175 628-285 641.625-298.5 655.25-312 675-312z" />
  </Svg>
);
