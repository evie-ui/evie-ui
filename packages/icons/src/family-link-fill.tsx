import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFamilyLinkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M392-17q-54 0-98-32t-63-86q-10-24-22.5-34.5T177-180q-16 0-32.5 10T111-139l-63-70q30-32 63-49t67-17q53 0 88.5 28.5T323-161q10 23 28 36t41 13q12 0 25.5-4t22.5-13l1-1-288-402q-9-13-13.5-26t-4.5-29q0-19 7-36.5t21-30.5l272-265q13-13 30-20t35-7q18 0 35 7t30 20l272 265q14 13 21.5 30.5T866-587q0 16-5 29.5T848-532L527-87q-24 32-58.5 51T392-17" />
  </Svg>
);
