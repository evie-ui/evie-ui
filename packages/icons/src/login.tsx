import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLogin = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M522-95q-19.75 0-33.375-13.675Q475-122.351 475-142.175 475-162 488.625-175.5 502.25-189 522-189h249v-582H522q-19.75 0-33.375-13.675Q475-798.351 475-818.088q0-19.737 13.625-33.824Q502.25-866 522-866h249q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm-95-338H142q-19.75 0-33.375-13.675Q95-460.351 95-480.175 95-500 108.625-513.5 122.25-527 142-527h283l-64-64q-14-14.209-13.5-33.605Q348-644 362-657.5q14-14.5 32.783-14Q413.565-671 428-657l145 145q14 14.364 14 33.182T573-446L429-302q-13.8 14-32.7 14.069-18.9.069-32.328-14.276Q350-315.552 349.5-335.276 349-355 363-369z" />
  </Svg>
);