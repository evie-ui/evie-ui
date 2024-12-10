import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFilterVintageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M478-46q-51 0-100-33t-71-102q-88 14-145.5-30.5T92-333q-11-37-2-77.5t53-69.5q-46-31-54.5-72.5T93-630q13-75 71.5-119T308-778q22-69 71-103t100-34q51 0 100 34t71 103q85-14 144 29.5T865-630q13 35 4 77.5T815-480q43 29 52 71t-3 76q-13 74-71 120t-144 32q-22 69-71.5 102T478-46m1-267q69 0 117.5-48.5T645-480q0-70-48.5-118.5T479-647q-69 0-115.5 48.5T317-480q0 70 46.5 118.5T479-313" />
  </Svg>
);
