import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWorkspacesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M218.5-95Q145-95 94-146T43-270q0-73 51-124.5T218.5-446q73.5 0 124.5 51.5T394-270q0 73-51 124T218.5-95m524 0q-73.5 0-124-51T568-270q0-73 50.5-124.5t124-51.5q73.5 0 124.5 51.5T918-270q0 73-51 124T742.5-95M481-539q-73 0-124-51t-51-124.5q0-73.5 51-124T481-889q73 0 124.5 50.5t51.5 124q0 73.5-51.5 124.5T481-539" />
  </Svg>
);
