import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgParkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M410-204H162q-28 0-41.5-25t2.5-49l139-200h-35q-19.383 0-28.691-16.5Q189-511 201-527l240-341q6.545-10.118 17.364-15.559Q469.182-889 480-889t21.636 5.441Q512.455-878.118 519-868l241 341q11 16 1.692 32.5Q752.383-478 733-478h-34l138 200q16 24 2.5 49T798-204H551v102q0 19.75-13.5 33.375T504.482-55h-46.964Q437-55 423.5-68.625T410-102z" />
  </Svg>
);
