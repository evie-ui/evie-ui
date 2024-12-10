import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThunderstormFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m538-70 33-36-39-20q-16-8-20-24.5t8-30.5l75-85q6-6 13.5-10t17.5-4q27 0 38 25t-7 44l-33 37 38 20q17 8 20.5 24.5T675-100l-75 86q-6 6-14 10t-17 4q-28 0-38.5-25t7.5-45m-275 0 33-36-38-20q-17-8-20.5-24.5T246-181l74-85q6-6 14-10t17-4q28 0 38.5 25t-7.5 44l-32 37 38 20q16 8 20 24.5t-8 29.5l-74 86q-7 6-14.5 10T294 0q-27 0-38-25t7-45m27-264q-94 0-160.5-67T63-561q0-84 58-150t145-75q35-56 90.5-89.5T480-909q93 0 158 58t84 144q82 8 128.5 61.5T897-521q0 77-54.5 132T710-334z" />
  </Svg>
);
