import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCalendarViewDayFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-258q-39.05 0-66.525-27.475Q95-312.95 95-352v-256q0-39.463 27.475-67.231Q149.95-703 189-703h582q39.463 0 67.231 27.769Q866-647.463 866-608v256q0 39.05-27.769 66.525Q810.463-258 771-258zm-48-536q-19 0-32.5-14T95-841q0-20 13.5-33.5T142-888h677q18.82 0 32.91 14Q866-860 866-841q0 20-14.062 33.5Q837.875-794 818-794zm0 722q-19 0-32.5-14T95-118.912q0-19.913 13.5-34Q122-167 142-167h677q18.82 0 32.91 14.588 14.09 14.587 14.09 33.5Q866-99 851.938-85.5 837.875-72 818-72z" />
  </Svg>
);
