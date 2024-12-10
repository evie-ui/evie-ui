import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPost = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h582q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95m-20-173H209v74h542zm-542-41h542v-73H209zm0-123h542v-319H209zm0 164v74zm0-41v-73zm0-123v-319zm0 50v-50zm0 114v-41z" />
  </Svg>
);
