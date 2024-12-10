import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWindowOpen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143-103v-754h674v754zm94-424h186v-40h114v40h186v-236H237zm0 330h486z" />
  </Svg>
);
