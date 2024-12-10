import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWorkspacePremium = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-482-79 61q-7 5-14 .5t-5-12.5l30-99-80-60q-8-4-5-12t12-8h97l33-106q3-9 11-9t11 9l32 106h99q8 0 11 8t-5 12l-79 60 28 99q2 8-4 12.5t-13-.5zm0 384L295-37q-23 8-42.5-7T233-83v-241q-51-51-74.5-114T135-565q0-146 99.5-245.5T480-910q146 0 246 99.5T826-565q0 64-24 127t-75 114v241q0 24-19.5 39T666-37zm0-216q105 0 178-72.5T731-565q0-105-73-178t-178-73q-105 0-178 73t-73 178q0 106 73 178.5T480-314M304-112l176-60 176 60v-160q-41 28-86.5 40.5T480-219q-44 0-89.5-12.5T304-272zm176-80" />
  </Svg>
);
