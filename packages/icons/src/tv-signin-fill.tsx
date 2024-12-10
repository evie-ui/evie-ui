import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTvSigninFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-354h342v-24q0-41-48.5-67.5T480-472q-74 0-122.5 26.5T309-378zm170.876-185Q513-539 536-561.876t23-56Q559-651 536.088-674 513.175-697 480-697t-56.087 23Q401-651 401-618t22.876 56q22.876 23 56 23M149-175q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.05-27.769 66.525Q850.463-175 811-175H644v33q0 20-14.062 33.5Q615.875-95 596-95H364q-20 0-33.5-13.5T317-142v-33z" />
  </Svg>
);
