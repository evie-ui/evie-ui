import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUniversalLocalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm331-345q-18 0-31-13t-13-31q0-18 13-31t31-13q18 0 31 13t13 31q0 18-13 31t-31 13m0-220q-69 0-122.5 48.5T304-520q0 69 52.5 133.5T457-280q5 4 11 6t12 2q6 0 12-2t11-6q48-42 100.5-106.353T656-520q0-83-53.5-131.5T480-700" />
  </Svg>
);
