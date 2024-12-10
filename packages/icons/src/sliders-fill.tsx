import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSlidersFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M201-337q-61.917 0-102.458-40.559Q58-418.118 58-480.059T98.542-582.5Q139.083-623 201-623h558q61.917 0 102.458 40.559Q902-541.882 902-479.941T861.458-377.5Q820.917-337 759-337zm365-83h197q26 0 43-17t17-43q0-34-17-47t-43-13H566z" />
  </Svg>
);
