import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPark = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M410-204H162q-28.5 0-41.75-25t2.75-49l139-200h-35q-19.273 0-28.636-16.659Q189-511.317 201-527l240-341q7-10 17.5-15.5T480-889q11 0 21.5 5.5T519-868l241 341q11 16 1.745 32.5Q752.489-478 733-478h-34l138 200q16 24 2.75 49T798-204H551v102q0 20-13.5 33.5T504-55h-46q-21 0-34.5-13.5T410-102zm-157-94h189-90 256-89 189zm0 0h455L519-572h89L480-753 352-572h90z" />
  </Svg>
);