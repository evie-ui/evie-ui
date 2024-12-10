import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgModeFanOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M939-418q0 61-37.5 93.5T818-289q-17 0-34.5-7.5T754-319L296-777q11-67 72.5-114.5T542-939q62 0 95.5 38t33.5 85q0 32-12 59.5T613-703q-24 18-38 43t-17 53q-1-1-3-2t-5-1l120-46q19-7 38-11t38-4q97 0 145 78.5T939-418M418-22q-63 0-96-37.5T289-148q0-31 14-60.5t44-49.5q20-13 34-34.5t22-59.5q2 0 4 1t4 3l-121 42q-20 8-39.5 12.5T212-289q-76 0-133-64.5T22-542q0-62 37-95.5t86-33.5q22 0 44 5.5t37 21.5L47-823q-10-10-10.5-25T47-874q11-11 25.5-11T98-874l773 773q10 11 10 25.5T871-51q-10 10-25.5 10T820-51L670-201q-6 72-69.5 125.5T418-22" />
  </Svg>
);
