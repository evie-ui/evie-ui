import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsCellFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M298.877 0Q282 0 270.5-11.123t-11.5-28Q259-55 270.693-67q11.693-12 28.57-12 15.877 0 27.307 12.193Q338-54.614 338-38.737q0 16.877-11.623 27.807T298.877 0m182 0Q464 0 452.5-11.123t-11.5-28Q441-56 452.693-67.5t28.57-11.5q16.877 0 27.807 11.693T520-38.737q0 16.877-11.123 27.807t-28 10.93m182 0Q646 0 635-11.123t-11-28Q624-55 635.123-67q11.123-12 28-12Q680-79 691-66.807t11 28.07q0 16.877-11.123 27.807t-28 10.93M323-149q-38.05 0-66.025-27.975Q229-204.95 229-243v-634q0-39.05 27.975-66.525Q284.95-971 323-971h314q38.05 0 66.025 27.475Q731-916.05 731-877v634q0 38.05-27.975 66.025Q675.05-149 637-149zm0-214h314v-394H323z" />
  </Svg>
);
