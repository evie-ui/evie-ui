import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlayArrowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M295-244v-478q0-22 14.071-35 14.072-13 32.5-13 6.197 0 12.813 1.5 6.616 1.5 13.495 5.429L744-522q10.5 7 16.25 17t5.75 22q0 12-5.75 22T744-444L367.879-202.929Q361-199 354.359-198q-6.64 1-12.859 1-18.5 0-32.5-12.275T295-244" />
  </Svg>
);
