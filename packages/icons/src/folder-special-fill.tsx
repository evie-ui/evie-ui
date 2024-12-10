import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFolderSpecialFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-28T55-229v-502q0-38 27.5-66.5T149-826h222q18 0 36 8t31 21l43 43h330q38 0 66.5 28t28.5 66v431q0 38-28.5 66T811-135zm447-227 59 40q6 5 12.5.5T672-335l-22-72 61-53q7-5 4-12.5t-12-7.5h-72l-24-70q-3-9-11-9t-11 9l-25 70h-72q-9 0-12 7.5t4 12.5l61 53-23 72q-2 9 5 14t14 0z" />
  </Svg>
);
