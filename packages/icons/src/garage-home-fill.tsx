import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGarageHomeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-95v-518l345-259 346 259v518H671v-434H289v434zm237-83h216v-93H372zm0-176h216v-93H372z" />
  </Svg>
);
