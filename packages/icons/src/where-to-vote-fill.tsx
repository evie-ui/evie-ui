import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWhereToVoteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m447-535-41-41q-10-10-24.5-9.5T357-575q-10 10-10 24.5t10 24.5l56 55q14 14 34 14t34-14l128-129q10-10 9.5-24T608-648q-10-10-24-10t-24 10zm379-20q0 69-28.5 134.5t-72 124Q682-238 630-187.5T531-97q-11 9-24.5 13.5T480-79q-13 0-26.5-4.5T430-97q-48-40-100-90.5t-95.5-109Q191-355 163-420.5T135-555q0-160 104.5-255.5T480-906q136 0 241 95.5T826-555" />
  </Svg>
);
