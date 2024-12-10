import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatInkHighlighterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151 0q-30 0-50.5-21.5T80-73q0-30 21.5-50.5T153-144h656q30 0 50.5 20.5T880-73q0 30-21.5 51.5T807 0zm302-713 246 246-175 175q-28 28-76.5 28T371-292l-11-11-21 22q-14 15-32.5 23t-38.5 8h-57q-16 0-21.5-15t5.5-26l88-88-4-4q-32-31-31-78t32-79zm45-44 133-134q28-28 67.5-28t67.5 28l108 110q28 28 27.5 70T873-641L743-511z" />
  </Svg>
);
