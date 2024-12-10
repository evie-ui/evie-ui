import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLaptopChromebookFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M69-209v-562q0-40.213 27.625-67.606Q124.25-866 163-866h634q38.75 0 66.375 27.394Q891-811.213 891-771v562h33q15.3 0 25.65 10.4Q960-188.199 960-172.825q0 16.225-9.925 26.025-9.925 9.8-26.151 9.8H36q-15.3 0-25.65-9.975Q0-156.951 0-172.675 0-188.4 9.925-198.7 19.85-209 36-209zm347.588 0h128.824Q554-209 560-215t6-15q0-9-6-15t-14.588-6H416.588Q408-251 402-245t-6 15q0 9 6 15t14.588 6" />
  </Svg>
);
