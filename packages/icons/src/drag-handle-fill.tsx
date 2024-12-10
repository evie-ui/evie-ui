import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDragHandleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-356q-19.75 0-33.375-13.675Q135-383.351 135-403.175 135-423 148.625-436.5 162.25-450 182-450h596q19.75 0 33.875 13.675Q826-422.649 826-402.825 826-383 811.875-369.5 797.75-356 778-356zm0-154q-19.75 0-33.375-13.675Q135-537.351 135-557.175 135-577 148.625-591 162.25-605 182-605h596q19.75 0 33.875 14.175 14.125 14.176 14.125 34Q826-537 811.875-523.5 797.75-510 778-510z" />
  </Svg>
);
