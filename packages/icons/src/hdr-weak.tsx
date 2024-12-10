import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHdrWeak = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M185-312q-71 0-120-49T16-481q0-71 49-120.5T185-651q71 0 120.5 49.5T355-481q0 71-49.5 120T185-312m504.941 83q-104.524 0-178.233-73.958Q438-376.917 438-481t73.958-178.542Q585.917-734 690-734q104.5 0 178.75 74.458Q943-585.083 943-481t-74.267 178.042Q794.466-229 689.941-229m-.038-94q65.902 0 112.5-46Q849-415 849-481t-46.597-112q-46.598-46-112.5-46Q624-639 578-593t-46 112q0 66 46 112t111.903 46" />
  </Svg>
);
