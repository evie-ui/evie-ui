import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWindowOpenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143-103v-754h674v754zm124-424h156v-40h114v40h156v-206H267zm-30 330h486v-566H237z" />
  </Svg>
);
