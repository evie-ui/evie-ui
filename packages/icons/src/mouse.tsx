import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMouse = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.838-55Q351-55 263-142.957T175-360v-260q0-128.771 87.939-217.386Q350.879-926 479.717-926q128.839 0 217.561 88.614Q786-748.771 786-620v260q0 129.086-88.662 217.043Q608.677-55 479.838-55M510-620h181q0-76.187-50-136.593Q591-817 510-829zm-241 0h181v-209q-81 12-131 72.407Q269-696.187 269-620m210.601 471Q567-149 629-210.718 691-272.435 691-360v-200H269v200q0 87.3 61.601 149.15 61.6 61.85 149 61.85M480-560" />
  </Svg>
);
