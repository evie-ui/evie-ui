import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFluidBalanceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141-135q-39.8 0-66.9-27.1Q47-189.2 47-229v-502q0-40.213 27.1-67.606Q101.2-826 141-826h678q39.213 0 66.606 27.394Q913-771.213 914-732H615q-68.463 0-111.731 52.5Q460-627 460-557v175q0 80 39.5 146.5T609-135zM791-8q-40.213 0-67.606-27.394Q696-62.788 696-103v-54q-76-15-126-75.5T520-382v-175q0-54 27.588-84 27.587-30 67.412-30h250q38.75 0 66.375 27.625T959-577v205q0 80.797-50 140.398Q859-172 783-157v62h87q17.625 0 30.312 12.738Q913-69.524 913-51.825 913-33 900.312-20.5 887.625-8 870-8zm19-403h67v-178H602v98h48q32.605 0 61.57 14.464Q740.536-462.071 761-436q9.5 12 21.812 18.5Q795.125-411 810-411M420-539q16.475 0 28.237-11.175Q460-561.351 460-577.982q0-16.632-11.763-28.325Q436.475-618 420-618H284q-16.75 0-27.875 11.868Q245-594.263 245-577.632 245-561 256.125-550T284-539zm0 197q16.475 0 28.237-11.868Q460-365.737 460-382.368 460-399 448.237-410.5 436.475-422 420-422H284q-16.75 0-27.875 11.868Q245-398.263 245-381.632 245-365 256.125-353.5T284-342z" />
  </Svg>
);
