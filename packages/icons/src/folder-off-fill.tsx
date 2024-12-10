import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M890-179 242-826h149q19 0 36.5 8t31.5 21l42 43h310q38 0 66.5 28t28.5 66v431q0 13-4.5 26T890-179m-741 44q-39 0-66.5-28T55-229v-502q0-32 20.5-58t51.5-34h34l91 92H152l-87-87q-11-11-10.5-25.5T65-868q11-11 25-11t25 11L897-87q10 11 10 25.5T897-37q-11 11-25.5 10.5T847-37l-97-98z" />
  </Svg>
);
