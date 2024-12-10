import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGroupedBarChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M193-143q-19.75 0-33.375-13.625T146-190v-420q0-19.75 13.625-33.375T193-657h76q19.75 0 33.375 13.625T316-610v420q0 19.75-13.625 33.375T269-143zm233 0q-20.75 0-34.375-13.625T378-190v-220q0-19.75 13.625-33.375T426-457h75q19.75 0 33.375 13.625T548-410v220q0 19.75-13.625 33.375T501-143zm267 0q-19.75 0-33.375-13.625T646-190v-580q0-19.75 13.625-33.375T693-817h76q19.75 0 33.375 13.625T816-770v580q0 19.75-13.625 33.375T769-143z" />
  </Svg>
);
