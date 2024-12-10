import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalShippingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M230.118-138Q179-138 141.5-171.417 104-204.833 102-256H64q-19.75 0-33.375-13.625T17-303v-426q0-39.05 27.475-66.525Q71.95-823 111-823h485q38.75 0 66.375 27.625T690-729v61h51q22.036 0 41.752 9.812Q802.469-648.375 816-630l118 157q4 6.125 6.5 13.349Q943-452.428 943-444v141q0 19.75-13.625 33.375T896-256h-36q-3 51-40.382 84.5-37.383 33.5-88.5 33.5Q680-138 642.5-171.417 605-204.833 603-256H358q-3 50-39.882 84-36.883 34-88 34M230-210q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17m501 0q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17m-41-215h162L741-573h-51z" />
  </Svg>
);
