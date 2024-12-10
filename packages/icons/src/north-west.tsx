import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNorthWest = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270-624v222q0 20.75-13.675 34.375Q242.649-354 222.825-354 202-354 188.5-367.625 175-381.25 175-402v-336q0-19.75 13.625-33.375T223-785h336q19.75 0 33.375 13.675Q606-757.649 606-737.825 606-717 592.375-703.5 578.75-690 559-690H336l455 455q14 14 14 33t-14 33q-14 14-33 14t-33-14z" />
  </Svg>
);
