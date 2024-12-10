import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWallpaperFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-203q0-19.75 13.675-33.375Q122.351-439 142.175-439 162-439 175.5-425.375 189-411.75 189-392v203h203q19.75 0 33.375 13.675Q439-161.649 439-141.825 439-122 425.375-108.5 411.75-95 392-95zm582 0H569q-20.75 0-34.375-13.675Q521-122.351 521-142.175 521-162 534.625-175.5 548.25-189 569-189h202v-203q0-19.75 13.675-33.375Q798.351-439 818.088-439q19.737 0 33.824 13.625Q866-411.75 866-392v203q0 39.05-27.769 66.525Q810.463-95 771-95M448-317l113-145q7-10 18.846-9.5T599-462l114 156q8 12.75 2 25.375T694-268H271q-15.5 0-21.75-12.625T252-306l84-112q7.308-9 19.154-9.5T375-418zM95-771q0-39.463 27.475-67.231Q149.95-866 189-866h203q19.75 0 33.375 14.263t13.625 34Q439-798 425.375-784.5 411.75-771 392-771H189v202q0 20.75-13.675 34.375Q161.649-521 141.825-521 122-521 108.5-534.625 95-548.25 95-569zm771 0v202q0 20.75-14.263 34.375t-34 13.625Q798-521 784.5-534.625 771-548.25 771-569v-202H569q-20.75 0-34.375-13.675Q521-798.351 521-818.088q0-19.737 13.625-33.824Q548.25-866 569-866h202q39.463 0 67.231 27.769Q866-810.463 866-771M624-570q-23.4 0-38.7-15.3Q570-600.6 570-624q0-23.4 15.3-38.7Q600.6-678 624-678q23.4 0 38.7 15.3Q678-647.4 678-624q0 23.4-15.3 38.7Q647.4-570 624-570" />
  </Svg>
);
