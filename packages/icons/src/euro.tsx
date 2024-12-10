import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEuro = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M590-95q-117 0-217-64T236-345h-90q-20 0-33.5-13.5T99-392q0-20 13.5-33.5T146-439h75q-3-19-3-38t3-44h-75q-20 0-33.5-13.5T99-568q0-20 13.5-34t33.5-14h90q39-115 138-182.5T590-866q66 0 124 21t110 58q15 11 16 30.5T827-723q-14 14-34.5 14.5T755-719q-37-26-79-39t-86-13q-80 0-150 43.5T342-616h224q20 0 34 14t14 34q0 20-14 33.5T566-521H315q-3 19-3.5 37t3.5 45h251q20 0 34 13.5t14 33.5q0 20-14 33.5T566-345H339q31 74 101 115t150 41q43 0 84.5-12.5T755-241q17-11 37.5-10.5T827-237q14 14 13 33t-16 30q-48 36-107.5 57.5T590-95" />
  </Svg>
);
