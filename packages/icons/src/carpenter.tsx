import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCarpenter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M652-53q-14.25 13.13-30.945 19.565Q604.361-27 585.18-27q-19.18 0-36.521-6.435Q531.317-39.87 518-53l-68-69q-14-13-21.583-26.707Q420.833-162.415 419-176q-3-13 .5-28t13.5-32l13-17L68-786l178-177 591 590q14 14 21 30.82 7 16.819 7 35 0 19.18-7 36.18t-21 31zM514-321l119-120-387-388-55 53zm70 202 187-188-69-68-187 187zm-70-202 119-120z" />
  </Svg>
);
