import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEdgesensorHigh = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M29.825-280Q17-280 8.5-288.625T0-310v-220q0-12.75 8.675-21.375Q17.351-560 30.175-560 43-560 51.5-551.375T60-530v220q0 12.75-8.675 21.375Q42.649-280 29.825-280m114-120Q131-400 122.5-408.625T114-430v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T174-650v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625M324-69q-39.05 0-66.525-27.475Q230-123.95 230-163v-634q0-39.05 27.475-66.525Q284.95-891 324-891h313q39.05 0 66.525 27.475Q731-836.05 731-797v634q0 39.05-27.475 66.525Q676.05-69 637-69zm313-124H324v30h313zM324-767h313v-30H324zm491.825 487Q803-280 794.5-288.625T786-310v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T846-530v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625m114-120Q917-400 908.5-408.625T900-430v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T960-650v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625M324-767v-30zm0 574v30zm0-60h313v-454H324z" />
  </Svg>
);
