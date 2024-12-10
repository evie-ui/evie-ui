import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVerticalShades = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M94-86q-20.75 0-34.375-13.675Q46-113.351 46-134.175 46-154 59.625-167.5 73.25-181 94-181h32v-598q0-39.75 27.625-67.375T221-874h518q39.75 0 67.375 27.625T834-779v598h33q19.75 0 33.375 13.675Q914-153.649 914-133.825 914-113 900.375-99.5 886.75-86 867-86zm127-95h90v-598h-90zm169 0h180v-598H390zm259 0h90v-598h-90zm-428 0v-598zm518 0v-598z" />
  </Svg>
);
