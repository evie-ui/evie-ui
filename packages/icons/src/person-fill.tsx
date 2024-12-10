import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.796-494q-77.203 0-126-48.796Q305-591.593 305-668.796 305-746 353.796-795q48.797-49 126-49Q557-844 606.5-795T656-668.796q0 77.203-49.5 126Q557-494 479.796-494M135-216v-27q0-44 22.633-77.417Q180.266-353.833 217-371q69-31 133.5-46.5T479.731-433q66.731 0 130.5 16Q674-401 742-371q38 16 61 49.5t23 78.5v27q0 39-27.269 66.5Q771.463-122 731-122H229q-40.05 0-67.025-27.5Q135-177 135-216" />
  </Svg>
);