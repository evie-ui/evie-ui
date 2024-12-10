import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDominoMaskFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M313-207q-56 0-108.5-20.5T110-287q-53-50-76.5-118T10-545q0-91 47-149t134-59q17 0 33 3t31 8l227 86 226-86q15-5 31.5-8t32.5-3q86 1 132 59t46 149q0 71-24 139.5T850-287q-42 39-94.5 59.5T647-207q-55 0-102.5-24.5T483-265h-5q-17 12-62 35t-103 23m36-183q35 0 54.5-16t19.5-44q0-43-55.5-82T251-571q-35 0-54 16.5T178-510q0 43 55 81.5T349-390m262 1q61 0 116.5-39t55.5-82q0-29-19.5-45T709-571q-61 0-116 39t-55 82q0 28 19 44.5t54 16.5" />
  </Svg>
);
