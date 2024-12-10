import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCalendarViewDay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-258q-38.775 0-66.388-27.612Q95-313.225 95-352v-256q0-39.188 27.612-67.094Q150.225-703 189-703h582q39.188 0 67.094 27.906Q866-647.188 866-608v256q0 38.775-27.906 66.388Q810.188-258 771-258zm0-94h582v-256H189zm-48-442q-19 0-32.5-14T95-841.5q0-19.5 13.625-33T142-888h677q18.82 0 32.91 14Q866-860 866-840.5t-14.188 33Q837.625-794 818-794zm0 722q-19 0-32.5-14T95-119.412q0-19.413 13.625-33.5Q122.25-167 142-167h677q18.82 0 32.91 14.588 14.09 14.587 14.09 34Q866-99 851.812-85.5 837.625-72 818-72zm48-536v256z" />
  </Svg>
);
