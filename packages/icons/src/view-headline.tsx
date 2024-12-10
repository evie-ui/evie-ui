import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewHeadline = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-338q-19 0-32.5-14T143-385q0-20 13.5-33.5T190-432h581q19 0 32.5 14t13.5 33q0 20-13.5 33.5T770-338zm0 195q-19 0-32.5-14T143-190q0-20 13.5-34t33.5-14h581q19 0 32.5 14.5T817-190q0 20-13.5 33.5T770-143zm0-385q-19 0-32.5-14T143-575q0-20 13.5-34t33.5-14h581q19 0 32.5 14.5T817-575q0 20-13.5 33.5T770-528zm0-195q-19 0-32.5-14T143-770q0-20 13.5-33.5T190-817h581q19 0 32.5 14t13.5 33q0 20-13.5 33.5T770-723z" />
  </Svg>
);
