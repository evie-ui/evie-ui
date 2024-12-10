import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsCell = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M298.377 0Q282 0 270.5-11.248T259-39.123Q259-55 270.818-67q11.818-12 28.445-12 15.877 0 27.307 12.193Q338-54.614 338-38.237q0 16.377-11.623 27.307t-28 10.93m182.325 0Q464 0 452.5-11.298t-11.5-28Q441-56 452.868-67.5 464.737-79 481.439-79q16.701 0 27.631 11.868Q520-55.263 520-38.562q0 16.702-11.298 27.632t-28 10.93m182 0Q646 0 635-11.248t-11-27.875Q624-55 635.298-67q11.299-12 28-12Q680-79 691-66.807t11 28.57q0 16.377-11.298 27.307Q679.403 0 662.702 0M323-149q-38.05 0-66.025-27.975Q229-204.95 229-243v-634q0-39.05 27.975-66.525Q284.95-971 323-971h314q38.05 0 66.025 27.475Q731-916.05 731-877v634q0 38.05-27.975 66.025Q675.05-149 637-149zm0-94h314v-60H323zm0-120h314v-394H323zm0-454h314v-60H323zm0 0v-60zm0 574v-60z" />
  </Svg>
);