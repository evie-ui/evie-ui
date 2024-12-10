import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabelImportantFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M290-480 187-640q-31-48-4-97t84-49h321q30 0 55 14.5t43 38.5l141 198q18 24 18 54.5T827-425L685-225q-16 22-40 36t-52 14H267q-57 0-84-48.5t4-96.5z" />
  </Svg>
);
