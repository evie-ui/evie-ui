import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEco = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M196-158q-48.594-49-74.797-113.37Q95-335.74 95-402q0-75.984 27.5-140.992T203-661q45-45 111-71.5T459.5-771Q539-783 629-784t183 6q9 90 9.5 179.5T810-428.25q-12 80.75-39 149.063Q744-210.874 697-164q-50.936 51.961-114.331 79.98Q519.275-56 447.696-56 373-56 311.5-79T196-158m125-26q25.678 17 58.339 25t68.06 8q50.887 0 98.744-21.5T632-233q34-35 53.5-89.5T714-440q9-63 10-128.5T722-690q-91-3-163.5 2t-128 17Q375-659 336-640t-62 43q-39 39-62 86.341-23 47.341-23 93.559 0 43.695 18 94.397Q225-272 255.288-241 302-333 373-407t162-124q-83 76-136 162.5T321-184m0 0" />
  </Svg>
);
