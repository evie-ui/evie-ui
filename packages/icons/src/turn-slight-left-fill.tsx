import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTurnSlightLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M575.825-135Q556-135 542.5-148.625 529-162.25 529-182v-266L312-664v79q0 20.75-13.675 34.375Q284.649-537 264.825-537 245-537 231.5-550.625 218-564.25 218-585v-193q0-19.75 13.625-33.875T265-826h194q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q506-758 492.375-744.5 478.75-731 459-731h-80l216 217q13 13 20.5 30.456Q623-466.089 623-448v266q0 19.75-13.675 33.375Q595.649-135 575.825-135" />
  </Svg>
);
