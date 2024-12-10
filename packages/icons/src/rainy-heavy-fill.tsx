import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRainyHeavyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M341-198q-17 9-35.5 3T278-219L38-699q-9-17-3-36t24-27q17-8 35.5-2.5T122-742l241 480q8 18 2 36.5T341-198m187 0q-18 9-36.5 3T464-219L224-699q-8-17-2-35.5t24-27.5q17-9 35.5-3t27.5 23l240 480q8 18 2 36.5T528-198m187 0q-18 9-36.5 2.5T651-220L411-700q-8-17-2.5-35.5T432-763q17-8 36-2t28 23l240 480q8 17 2 35.5T715-198m187 0q-18 9-36.5 2.5T838-220L598-700q-9-17-2.5-35.5T620-763q17-8 35.5-2t27.5 23l240 480q8 18 2 36.5T902-198" />
  </Svg>
);
