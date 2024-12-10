import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderOpenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M906-660H324q-67 0-121 33.5T149-532v307l79-307q9-31 34-49.5t57-18.5h516q46 0 75 38t15 84l-64 252q-15 50-44.5 70.5T735-135H149q-38 0-66-28t-28-66v-502q0-39 28-67t66-28h222q18 0 36 8t31 21l43 43h330q39 0 67 28t28 66" />
  </Svg>
);
