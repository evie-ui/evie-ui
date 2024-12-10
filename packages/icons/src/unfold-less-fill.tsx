import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUnfoldLessFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-273 376-169q-14 14-33 13.5T310-170q-14-14-14-33.5t14-33.5l136-136q7-7 16-11t18-4q9 0 18 4t16 11l137 137q14 14 14 33t-14 33q-14 14-33.5 14T584-170zm0-414 104-104q14-14 33-13.5t33 14.5q14 14 14 33.5T650-723L514-587q-7 7-16 11t-18 4q-9 0-18-4t-16-11L309-724q-14-14-13.5-33.5T310-791q14-14 33.5-14t33.5 14z" />
  </Svg>
);
