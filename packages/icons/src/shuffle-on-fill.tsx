import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShuffleOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M87-15q-29 0-50.5-21.5T15-87v-787q0-29 21.5-51T87-947h787q29 0 51 22t22 51v787q0 29-22 50.5T874-15zm594-202h-68q-18 0-29.5 12T572-176q0 18 11.5 29.5T613-135h165q20 0 34-13.5t14-33.5v-163q0-18-12-29.5T784-386q-18 0-30 11.5T742-345v69L578-437l-59 59zm61.083-466v68q0 18 11.976 30T784-573q18 0 30-12t12-30v-163q0-20-14-34t-34-14H614q-18 0-30 12t-12 30q0 18 11.5 30t29.5 12h70L162.5-220.955q-11.5 11.554-12 28.676t11.5 29.2Q175-149 191.5-149t29.601-13.11zM385-518l60-59-207-206q-12-12-28.625-12T181-782q-13 13-13 29.5t13 29.5z" />
  </Svg>
);
