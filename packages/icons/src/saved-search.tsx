import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSavedSearch = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m370-535-38 27q-7 5-13.5 0t-3.5-13l15-44-43-33q-8-5-5.5-13t11.5-8h49l17-46q3-9 11-9t11 9l17 46h49q8 0 10.5 8t-4.5 13l-43 33 15 44q3 9-3.5 13.5T408-508zm2 223q-115 0-195-80T97-585q0-113 80-193t194-80q113 0 192.5 80T643-585q0 45-12.5 83.5T593-429l236 234q14 15 14 34.5T829-127q-15 15-34.5 15T761-127L526-361q-29 23-68.5 36T372-312m-1-94q75 0 126.5-52T549-585q0-75-51.5-127T371-764q-75 0-127.5 52T191-585q0 75 52.5 127T371-406" />
  </Svg>
);