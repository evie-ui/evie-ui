import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInkMarkerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m252-73-40-40-34 35q-21 21-52.5 21T73-77q-20-20-18.5-50T75-177l38-37-41-40 622-624q17-16 39.5-16t39.5 16l104 104q16 17 16 39.5T877-695zm194-423L207-254l45 45 242-239z" />
  </Svg>
);
