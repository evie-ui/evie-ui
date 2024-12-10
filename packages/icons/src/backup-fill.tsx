import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBackupFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M253-135q-97 0-166.5-68T17-369q0-84 51-150.5T201-600q24-100 102-162.5T482-825q116 0 198 82.5T770-543v24q75 7 124 60.5T943-327q0 80-56 136t-136 56H516v-306l64 64q10 11 24 11t25-10q11-11 11.5-26T630-428L514-545q-14-14-34-14t-34 14L329-427q-11 11-10 25.5t12 24.5q11 11 25.5 10.5T382-378l62-63v306z" />
  </Svg>
);