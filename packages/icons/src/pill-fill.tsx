import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPillFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m684-344 101-101q32.909-34.019 51.455-77.955Q855-566.891 855-615.114q0-100.219-70.053-170.052Q714.895-855 615-855q-47.937 0-91.925 18.545Q479.088-817.909 445-785L344-684zM345-105q47.937 0 91.925-18.545Q480.912-142.091 515-176l101-101-339-339-101 101q-33.909 34.019-52.455 77.955Q105-393.109 105-344.886q0 100.219 70.053 170.052Q245.105-105 345-105" />
  </Svg>
);
