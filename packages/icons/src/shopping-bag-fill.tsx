import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShoppingBagFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-490q0-39.463 27.475-67.231Q189.95-734 229-734h84v-10q2-68 50.5-115T480-906q68 0 116.5 47T647-744v10h84q39.463 0 67.231 27.769Q826-678.463 826-639v490q0 39.05-27.769 66.525Q770.463-55 731-55zm179-679h144v-10q-2-28-22.5-47.5T480-811q-29 0-49.5 19.5T408-744zm192 215q20 0 33.5-13.5T647-566v-73h-94v73q0 20 13.5 33.5T600-519m-240 0q20 0 33.5-13.5T407-566v-73h-94v73q0 20 13.5 33.5T360-519" />
  </Svg>
);
