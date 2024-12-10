import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgResetTvFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M317-142v-33H149q-38.8 0-66.4-27.6Q55-230.2 55-269v-502q0-39.213 27.6-67.106Q110.2-866 149-866h662q39.213 0 67.106 27.894Q906-810.213 906-771v212H501l59-59q11-11 11-25.5T561-669q-11.511-11-25.256-11Q522-680 510-669L399-557q-15 14.364-15 34.182T399-489l111 110q11 10 25 10.5t25-10.5q11-11 11-25t-11-25l-59-58h405v218q0 38.8-27.894 66.4Q850.213-175 811-175H644v33q0 19.75-14.188 33.375Q615.625-95 596-95H364q-19.75 0-33.375-13.625T317-142" />
  </Svg>
);
