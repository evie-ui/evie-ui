import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPackage2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M450-56v-411L95-670v355q0 25 12 47t35 35zm60 0 308-177q23-13 35.5-35t12.5-47v-357L510-468zm175-581 145-83-303-175q-22-12-47-12t-47 12l-98 57zM479-518l144-84-351-201-143 84z" />
  </Svg>
);
