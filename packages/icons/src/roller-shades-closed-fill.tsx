import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRollerShadesClosedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.899-17Q451-17 430.5-36.9T410-86H94q-20.75 0-34.375-13.675Q46-113.351 46-133.675 46-154 59.625-167.5 73.25-181 94-181h32v-598q0-40.213 27.394-67.606Q180.788-874 221-874h518q40.213 0 67.606 27.394Q834-819.213 834-779v598h33q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q914-113 900.375-99.5 886.75-86 867-86H550q0 29-20.601 49t-49.5 20M221-181h219v-99H221zm299 0h219v-99H520z" />
  </Svg>
);
