import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsTennisFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M504-381q-73 0-125.5 15.5T293-317L148-172q-13 13-29.5 12.5T90-173q-12-12-12-29.5T90-232l145-144q33-34 48.5-84T299-586q0-65 26.5-125.5T405-823q90-91 200-103t182 59q70 70 58 181T743-483q-52 52-112.5 77T504-381m-86-118q45 45 125 32t143-76q62-63 75-141t-31-124q-44-44-124.5-31T463-764q-63 63-76.5 141.5T418-499M750-23q-64 0-107-43.5T600-173q0-63 43-106t107-43q63 0 106.5 43T900-173q0 63-43.5 106.5T750-23" />
  </Svg>
);