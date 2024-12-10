import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGlassCup = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M274-55q-35.513 0-63.1-23.93Q183.312-102.859 180-138l-74-662q-5-43 23.313-74.5Q157.627-906 201-906h559q42.94 0 70.97 31.5T855-800l-74 662q-4.312 35.141-31.156 59.07Q723-55 687-55zm-9-181 9 87h413l9-87zm-12.131-95h454.334L760-811H200zM265-149h431z" />
  </Svg>
);
