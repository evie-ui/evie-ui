import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCall = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M797-95q-122.098 0-247.049-58Q425-211 318.5-317.5t-165-231.959Q95-674.919 95-796q0-29.429 20-49.714Q135-866 164-866h140q31 0 50.5 16.5T381-802l26.929 109.641Q412-666 406.5-646t-21.729 34.226L281-517q22 36 47 68t57 62q33 35 66.5 61t68.5 44l100-101q17-18 38.151-24 21.151-6 44.849 0l99 23q31 9 47.5 29.044T866-305v141q0 29.571-20.357 49.286Q825.286-95 797-95M234-600l80-75-22-96H191q1 36 10.457 77.441T234-600m372 367q36 17 79.5 28t85.5 14v-102.822L683-313zm0 0" />
  </Svg>
);
