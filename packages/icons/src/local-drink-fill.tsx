import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalDrinkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M274-55q-35.513 0-62.757-23.5Q184-102 180-138l-73-651q-5-47.343 26.421-82.172Q164.843-906 212-906h536q47.157 0 78.579 34.828Q858-836.343 853-789l-72 651q-4 36-31 59.5T687-55zm-55.756-585H742l18-171H200zM480-198q45 0 76.5-31t31.5-75q0-39-18-80t-58.667-86.762q-6.5-6.238-14.291-9.738-7.792-3.5-17.125-3.5-9.334 0-17.125 3.5Q455-477 449-471q-41 46-59 87t-18 80q0 44 31.5 75t76.5 31" />
  </Svg>
);
