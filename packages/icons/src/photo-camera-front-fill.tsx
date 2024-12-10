import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoCameraFrontFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-495q0-38.463 27.475-66.731Q109.95-779 149-779h125l83-87h246l84 87h124q38.463 0 66.731 28.269Q906-722.463 906-684v495q0 39.05-28.269 66.525Q849.463-95 811-95zm160-182h342v-24q0-45-44.862-69.5t-126-24.5Q399-395 354-370.5T309-301zm170.876-185Q513-462 536-484.876t23-56Q559-574 536.088-597 513.175-620 480-620t-56.087 23Q401-574 401-541t22.876 56q22.876 23 56 23" />
  </Svg>
);
