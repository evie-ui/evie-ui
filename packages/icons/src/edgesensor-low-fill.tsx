import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEdgesensorLowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M99-400q-13 0-21.5-8.5T69-430v-220q0-13 8.5-21.5T99-680q13 0 21.5 8.5T129-650v220q0 13-8.5 21.5T99-400m762 119q-13 0-21.5-8.5T831-311v-219q0-13 8.5-21.5T861-560q13 0 21.5 8.5T891-530v219q0 13-8.5 21.5T861-281M323-69q-39.05 0-66.525-27.475Q229-123.95 229-163v-634q0-39.05 27.475-66.525Q283.95-891 323-891h314q39.05 0 66.525 27.475Q731-836.05 731-797v634q0 39.05-27.475 66.525Q676.05-69 637-69zm1-184h313v-454H324z" />
  </Svg>
);
