import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewCompactFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M904-141v-678zM56-613v-206h188v206zm218 0v-206h191v206zm221 0v-206h191v206zm221 0v-206h188v206zm0 236v-206h188v206zm-221 0v-206h191v206zm-221 0v-206h191v206zm-218 0v-206h188v206zm660 236v-206h188v206zm-221 0v-206h191v206zm-221 0v-206h191v206zm-218 0v-206h188v206z" />
  </Svg>
);
