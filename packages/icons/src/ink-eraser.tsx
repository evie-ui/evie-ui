import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInkEraser = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M719-229h155q19.625 0 33.812 13.675Q922-201.649 922-181.825 922-162 907.812-148.5 893.625-135 874-135H624zm-549 94q-8.913 0-17.242-3T137-148l-69-72q-28.167-27.967-27.083-65.484Q42-323 68-350l451-483q26-27 64.6-26.5 38.6.5 66.4 27.5l189 199q28 27.967 29 66.484Q869-528 841-501L510-150q-6.98 7-15.456 11-8.475 4-17.544 4zm288.819-94L776-570 584-772 138-285l53 56zM480-480" />
  </Svg>
);
