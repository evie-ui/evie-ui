import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlannerBannerAdPt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 39.05-27.769 66.525Q770.463-55 731-55zm-9-85h520v-680H220zm228-132-51-64q-8.308-9-19.154-9T359-336l-46 61q-10 12.438-2.781 25.219Q317.438-237 331-237h303q14.583 0 20.792-13Q661-263 653-275l-81-108q-8.308-9-19.154-9T534-383zM220-140v-680z" />
  </Svg>
);
