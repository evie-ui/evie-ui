import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDentistryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M680.008-883q70.172 0 119.082 49.007Q848-784.987 848-714.855q0 10.855-1.5 29.355T842-642l-55 403q-6 43-39.008 67.5-33.009 24.5-71.375 24.5-22.617 0-44.117-9.5Q611-166 596-188.101L489-343.978q-2-.022-4-2.022-2-2-5.667-2-.333 0-10.333 6L365-191q-15 23-37.696 33.5Q304.608-147 280.51-147q-37.51 0-70.01-24.5Q178-196 173-240l-54-402q-4-25-5-43.338-1-18.337-1-29.241Q113-785 161.541-834t118.194-49q37.265 0 60.372 9.5 23.108 9.5 43.208 21.5 19.1 11 40.213 20 21.112 9 56.292 9 35.18 0 56.445-9 21.264-9 40.5-20 20.235-12 43.459-21.5 23.224-9.5 59.784-9.5" />
  </Svg>
);
