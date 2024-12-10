import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNotificationsActiveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-175q-20 0-33.5-13.5T135-222q0-20 13.5-33.5T182-269h24v-279q0-93 53-168.5T403-812v-16q0-33 22.5-55.5T480-906q32 0 54.5 22.5T557-828v16q91 19 144.5 95T755-548v279h23q20 0 34 13.5t14 33.5q0 20-14 33.5T778-175zM481-46q-37 0-63-26t-26-63h177q0 37-26 63t-62 26M111-549q-18 0-30.5-13T70-593q8-76 42.5-143T201-852q13-13 32-11.5t30 16.5q10 15 6.5 33.5T253-782q-39 38-64 85.5T157-592q-2 19-15 31t-31 12m738 0q-18 0-31-12t-15-31q-7-57-32-104.5T707-782q-13-13-16.5-31.5T698-847q10-15 29-16.5t32 11.5q54 49 88.5 116T890-593q2 18-10.5 31T849-549" />
  </Svg>
);
