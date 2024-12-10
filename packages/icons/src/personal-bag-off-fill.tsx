import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonalBagOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.789-917Q528-917 562-882t34 82.904V-774q80 32 135 109.5t55 174.129V-277L315-747.187q10-7.937 21.5-14.406T364-774v-22q0-48 33.272-84.5t82.517-36.5m.211 71q-20 0-32.5 15.5T435-796v2q6-1.5 21.5-1.75T480-796q9 0 24.5.25T525-794v-2q0-19-12.5-34.5T480-846M816-60 685-191h101v42q0 39.05-27.769 66.525Q730.463-55 691-55H269q-39.05 0-66.525-27.475Q175-109.95 175-149v-341q0-46 12.5-88.5T223-653L79-795q-11-11-10.5-25.5T80-846q11.267-12 25.133-12 13.867 0 25.692 11.809L867-110q11 11 10.5 25.5t-10.457 24.456Q856-49 841-49t-25-11M400-479h-75q-12 4-19 13t-7 21q0 15.15 10.425 25.575Q319.85-409 335-409h134z" />
  </Svg>
);
