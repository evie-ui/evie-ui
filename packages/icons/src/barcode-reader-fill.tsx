import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBarcodeReaderFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M210-78q-69 0-110.5-54T75-253l74-279q-35-24-55.5-63T73-680q0-73 51-124.5T249-856h343q53 0 81 44.5t5 92.5l-81 162q-12 24-35 38.5T511-504h-80l-13 51h5q19 1 31 14.5t12 32.5v73q0 20-13.5 33.5T419-286h-47l-26 102q-13 47-50.5 76.5T210-78m683-747-90 41q-10 4-20.5.5T768-798q-5-10-1.5-20.5T780-834l91-41q11-4 21.5 0t14.5 14q4 11 .5 21T893-825M780-526q-10-4-14-14t1-21q4-10 15-14.5t21 .5l90 41q10 4 14 14.5t0 21.5q-4 10-14.5 14t-21.5-1zm133-127H813q-12 0-20-8t-8-19q0-11 8-19.5t20-8.5h100q11 0 19 8.5t8 19.5q0 11-8 19t-19 8" />
  </Svg>
);
