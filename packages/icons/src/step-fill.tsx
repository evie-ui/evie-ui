import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStepFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M785-343q-54 0-91.5-39T656-475q0-54 37.5-92.5T785-606q53 0 91.5 38.5T915-475q0 54-38.5 93T785-343m-424-83H93q-20 0-34.5-14T44-475q0-20 14.5-34.5T93-524h268l-65-65q-14-15-14-34t13-33q15-15 35.5-15t34.5 15l146 148q14 15 14 33.5T511-442L364-292q-15 15-34.5 15T296-292q-13-14-13.5-32.5T295-358z" />
  </Svg>
);
