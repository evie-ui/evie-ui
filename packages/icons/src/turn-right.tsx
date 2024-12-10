import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTurnRight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M263-182v-329q0-38.75 27.625-66.375T357-605h328l-56-57q-15-14-15-32.5t15-33.5q14-14 33-14t33 14l137 136q14 14 14 34t-14 34L695-388q-14 15-32.5 14.5T629-389q-14-14-14-33t14-33l56-56H357v329q0 19.75-13.675 33.375Q329.649-135 309.825-135 290-135 276.5-148.625 263-162.25 263-182" />
  </Svg>
);