import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlayArrow = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M295-244v-478q0-22 14.138-35t32.656-13q5.974 0 12.715 1.5t13.37 5.429L744-522q10.5 7 16.25 17t5.75 22q0 12-5.75 22T744-444L367.879-202.929Q361.216-199 354.413-198q-6.802 1-12.805 1Q323-197 309-209.275 295-221.55 295-244m94-85 243-154-243-154z" />
  </Svg>
);
