import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRawOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M791-73 90-772q-11-11-11.5-25t11.007-25q11.508-12 25.747-12T141-822l700 699q11 11 11.5 24.5T841-73q-11 11-25 11t-25-11m-40-394-32 121-73-75-39-149q-4-14 5.671-25 9.67-11 24.388-11 9.941 0 16.994 6.455Q661.105-593.091 664-584l30 115 27-119q2-8 8.14-13 6.14-5 14.94-5h10.953Q763-606 769-601.455q6 4.546 8 12.455l31 120 27-114q2-9 10.392-16 8.393-7 18.758-7 13.85 0 23.35 11.5Q897-583 894-569l-47 193q-3 10-10.6 16t-17.9 6h-15.22q-10.086 0-18.754-6.727Q775.857-367.455 773-377zm-389.892 74.712L399-529l46 46-8 31h39l48 48H423l-6 28q-2.907 9.545-10.516 15.773-7.61 6.227-17.135 6.227-14.849 0-23.599-11.5t-4.642-26.788M114-384v-187q0-14.633 10.683-24.817Q135.367-606 150-606h114q25 0 39.5 14.5T318-552v63q0 21-12 31.5T278-444l22 51q6 14-2.5 26.5T274-354q-9 0-16-5t-11-14l-25-62h-48v51q0 12.6-8.674 21.3-8.673 8.7-21.233 8.7t-21.326-8.7Q114-371.4 114-384m60-99h84v-63h-84z" />
  </Svg>
);
