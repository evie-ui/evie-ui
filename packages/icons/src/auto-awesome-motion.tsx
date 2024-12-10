import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAutoAwesomeMotion = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M391-34q-39.05 0-66.525-27.769Q297-89.537 297-129v-440q0-39.05 27.475-66.525Q351.95-663 391-663h440q39.463 0 67.231 27.475Q926-608.05 926-569v440q0 39.463-27.769 67.231Q870.463-34 831-34zm0-95h440v-440H391zm-225-93v-478q0-39.463 27.475-67.231Q220.95-795 260-795h478q19.75 0 33.375 14.263t13.625 34Q785-727 771.375-713.5 757.75-700 738-700H260v478q0 19.75-13.675 33.375Q232.649-175 212.825-175 193-175 179.5-188.625 166-202.25 166-222M34-342v-489q0-39.463 27.769-67.231Q89.537-926 129-926h489q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q665-858 651.375-844.5 637.75-831 618-831H129v489q0 19.75-13.675 33.375Q101.649-295 81.325-295 61-295 47.5-308.625 34-322.25 34-342m357 213v-440z" />
  </Svg>
);
