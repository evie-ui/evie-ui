import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPermContactCalendarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-204q58-53 131-82t160-29q87 0 159.5 28T771-206v-545H189zm291-175q-59 0-100.5-41.5T338-521q0-59 41.5-100T480-662q59 0 100.5 41T622-521q0 59-41.5 100.5T480-379M189-55q-39.05 0-66.525-27.475Q95-109.95 95-149v-602q0-39.463 27.475-67.231Q149.95-846 189-846h56v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q327-881.75 327-865v19h306v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q715-881.75 715-865v19h56q39.463 0 67.231 27.769Q866-790.463 866-751v602q0 39.05-27.769 66.525Q810.463-55 771-55z" />
  </Svg>
);