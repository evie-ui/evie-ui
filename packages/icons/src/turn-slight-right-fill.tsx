import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTurnSlightRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M389.825-135Q370-135 356.5-148.625 343-162.25 343-182v-266q0-18.244 7.5-35.622T371-514l216-217h-79q-20.75 0-34.375-13.675Q460-758.351 460-778.088q0-19.737 13.625-33.824Q487.25-826 507.957-826H701q19.625 0 33.812 14.188Q749-797.625 749-778v193.043q0 20.707-14.263 34.332t-34 13.625Q681-537 667.5-550.625 654-564.25 654-585v-79L437-448v266q0 19.75-13.675 33.375Q409.649-135 389.825-135" />
  </Svg>
);