import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCompareArrows = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M332-304H102q-20 0-33.5-13.5T55-352q0-20 13.5-33.5T102-399h230l-71-71q-14-14-14-32.5t14-33.5q13-14 32.5-14t33.5 14l151 151q7 7 11 15.5t4 17.5q0 10-4 18.5T478-318L327-168q-14 14-33.5 14.5T261-168q-14-13-14-32.5t14-33.5zm297-257 70 70q14 15 14 33.5T699-425q-13 15-32.5 15T633-424L482-575q-7-7-11-15.5t-4-18.5q0-9 4-17.5t11-15.5l151-151q14-13 33.5-13.5T699-793q14 14 14 33.5T699-727l-70 71h229q20 0 34 13.5t14 33.5q0 21-14 34.5T858-561z" />
  </Svg>
);
