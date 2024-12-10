import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMicrowaveGenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.8 0-66.9-27.1Q55-189.2 55-229v-502q0-40.213 27.1-67.606Q109.2-826 149-826h662q40.213 0 67.606 27.394Q906-771.213 906-731v502q0 39.8-27.394 66.9Q851.213-135 811-135zm60-154h382v-382H209zm494.5 0q16.5 0 27-10.5t10.5-27q0-16.5-10.638-27Q719.725-364 704-364q-17 0-27.5 10.638Q666-342.725 666-327q0 17 10.5 27.5t27 10.5M284-364v-232h232v232zm419.5-79q16.5 0 27-10.693t10.5-26.5Q741-496 730.362-507 719.725-518 704-518q-17 0-27.5 10.895-10.5 10.894-10.5 27Q666-464 676.5-453.5t27 10.5m0-153q16.5 0 27-10.5t10.5-27q0-16.5-10.638-27Q719.725-671 704-671q-17 0-27.5 10.638Q666-649.725 666-634q0 17 10.5 27.5t27 10.5" />
  </Svg>
);