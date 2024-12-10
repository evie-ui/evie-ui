import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCookieOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M825-248 248-825q60-41 125-56t139-15q23 0 40 15.5t18 38.5q3 72 46.5 113T732-685q14 1 23.5 11.5T763-649q-3 43 25 74.5t73 43.5q15 4 25.5 15.5T897-489q0 68-17.5 127T825-248M340-358q26 0 44-18t18-44q0-26-18-44t-44-18q-26 0-44 18t-18 44q0 26 18 44t44 18M480-55q-90 0-168-32.5T177-177q-57-57-89.5-135T55-480q0-72 21-136.5T136-734l-89-89q-10-10-10.5-25T47-874q11-11 25.5-11T98-874l773 773q10 11 10 25.5T870-50q-10 10-24.5 10T820-50l-86-86q-53 39-117.5 60T480-55" />
  </Svg>
);
