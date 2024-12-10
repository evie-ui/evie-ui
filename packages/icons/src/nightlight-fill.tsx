import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNightlightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M572-55q-92.349 0-174.175-33Q316-121 254.5-179.5q-61.5-58.5-97-137T122-486.128q0-91.128 35.5-170T254.5-793q61.5-58 143.325-91.5Q479.651-918 572-918q40 0 79 10t76 25q13 6 20.5 17.5T755-841q0 11-4 20.5t-14 17.287Q664-743 617.5-661.932 571-580.864 571-486.451 571-393 618.5-313.5T735-169.6q10 7.6 14.5 16.87 4.5 9.271 4.5 20.027 0 12.703-7.5 25.203T726-89q-37 15-75.365 24.5Q612.269-55 572-55" />
  </Svg>
);
