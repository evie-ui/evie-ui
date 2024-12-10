import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEuroSymbolFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M594.142-109Q467-109 374.5-179.5T250-361H148q-15.55 0-25.775-9.8Q112-380.6 112-397t9.8-26.2q9.8-9.8 26.2-9.8h85q-2-9.55-3-24t-1-23q0-8.759 1-21.879Q231-515 233-527h-85q-15.55 0-25.775-9.8Q112-546.6 112-563t9.8-26.2q9.8-9.8 26.2-9.8h102q35-117 125.975-184.5t217.66-67.5Q654-851 710-834q56 17 105 54 14 12 14.5 31T816-716q-14 14-32.5 14.5T747-711q-35-24-74.257-35.5-39.257-11.5-79.048-11.5Q502-758 441-715t-87 116h205q15.55 0 25.775 9.8Q595-579.4 595-563t-10.225 26.2Q574.55-527 559-527H331.826Q329-517 328.5-503.5T328-480q0 10 .5 23.5t3.326 23.5H559q15.55 0 25.775 9.8Q595-413.4 595-397t-10.225 26.2Q574.55-361 559-361H354q25 75 90 117t149.682 42q39.543 0 78.931-12.5Q712-227 746-250q16-10 36-9t34 14.5q14 13.5 13 33T812-182q-50 38-105.136 55.5Q651.727-109 594.142-109" />
  </Svg>
);
