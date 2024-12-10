import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPages = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582zm291 390 70 42q13.333 9 25.667-1Q588-350 585-365l-19-78 61-54q12-10 7-24.5T614-538l-80.726-5.955L502-619q-6.129-15-22.065-15Q464-634 458-619l-31.274 75.045L346-538q-15 2-20 16.5t7 24.5l61 54-18 78q-4 14.524 8.417 24.762Q396.833-330 410-339z" />
  </Svg>
);