import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHiveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M661-502h140l56-102q6-11 6-23t-6-23l-42-78q-7-11-18-17.5t-24-6.5H661l-68 125zM409-354h143l67-126-67-126H409l-67 126zm0-294h142l68-125-55-100q-7-12-18-18t-24-6h-84q-13 0-24 6t-18 18l-54 100zm-38 21-69-125H187q-13 0-24 6.5T146-728l-43 78q-6 11-6 23t6 23l56 102h143zm0 294-69-125H159l-56 102q-6 11-6 23t6 23l43 77q6 12 17 18.5t24 6.5h115zm38 20-67 126 53 98q6 13 16.5 19.5T436-63h86q13 0 24-6t18-18l55-100-68-126zm252 105h112q13 0 24-6.5t18-18.5l42-77q6-11 6-23t-6-23l-56-102H661l-68 125z" />
  </Svg>
);
