import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRollerShades = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M126-181v-598q0-39.75 27.625-67.375T221-874h518q39.75 0 67.375 27.625T834-779v598h33q19.75 0 33.375 13.675Q914-153.649 914-133.825 914-113 900.375-99.5 886.75-86 867-86H94q-20.75 0-34.375-13.675Q46-113.351 46-134.175 46-154 59.625-167.5 73.25-181 94-181zm95-339h518v-259H221zm0 339h518v-259H520v70q13 9.034 21.5 24.336Q550-330.362 550-313q0 28.857-20.601 49.429Q508.798-243 479.899-243T430.5-263.571Q410-284.143 410-313q0-18.062 8.5-33.417T440-370v-70H221zm0-598h518z" />
  </Svg>
);
