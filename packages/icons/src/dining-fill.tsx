import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDiningFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M332.814-197Q348-197 359-207.867q11-10.866 11-26.133v-229q29-6 52-30.914 23-24.915 23-55.086v-161q0-11-8.5-19t-20-8q-11.5 0-19.5 8t-8 19v121h-26v-121q0-11-8-19t-19.5-8q-11.5 0-19.5 8t-8 19v121h-33v-121q0-11-8-19t-19.5-8q-11.5 0-19.5 8t-8 19v161q0 30.171 23 55.086Q266-469 296-463v230q0 15.267 10.814 25.633 10.814 10.367 26 10.367m279.686 0q15.5 0 26-10.867Q649-218.733 649-234v-218q34-17 54.5-54.902Q724-544.803 724-595q0-62-31.304-102t-77.5-40Q569-737 538.5-697T508-595q0 53.197 17.5 90.098Q543-468 576-452v219q0 15.267 10.5 25.633Q597-197 612.5-197M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55z" />
  </Svg>
);