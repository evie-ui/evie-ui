import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPersonalPlaces = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M215-125v-606q0-40.213 27.1-67.606Q269.2-826 309-826h318q24 0 45 11t34 31l86 123q17 24.253 17 53.127Q809-579 792-555l-86 123q-13 20-34 30.5T627-391H309v266q0 20.75-13.675 34.375Q281.649-77 261.825-77 242-77 228.5-90.625 215-104.25 215-125m94-360h318l89-123-89-123H309zm0 0v-246z" />
  </Svg>
);
