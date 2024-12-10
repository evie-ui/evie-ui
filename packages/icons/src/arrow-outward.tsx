import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowOutward = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M644-616 283-254q-15 14-33.5 14T217-255q-15-15-15-33.5t15-33.5l361-361H272q-20.75 0-34.375-13.675Q224-710.351 224-730.175 224-750 237.625-763.5 251.25-777 272-777h420q19.75 0 33.375 13.625T739-730v420q0 19.75-13.675 33.375Q711.649-263 691.825-263 671-263 657.5-276.625 644-290.25 644-310z" />
  </Svg>
);
