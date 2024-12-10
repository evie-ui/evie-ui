import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCloudDoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m410-375-76-76q-10-10-25-9.5T284-450q-10 10-10 24t10 24l91 90q14 14 33.5 14t33.5-14l181-181q10-10 10-23.5T623-540q-10-10-24-10t-24 10zM253-135q-97 0-166.5-68T17-369q0-84 51-150.5T201-600q24-100 102-162.5T482-825q116 0 198 82.5T770-543v24q75 7 124 60.5T943-327q0 80-56 136t-136 56z" />
  </Svg>
);
