import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAutoplay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M387-344v-272q0-14 12-20t25 1l209 135q11 7 11 20t-11 20L424-325q-13 7-25 1t-12-20M109-220v71q0 20-13.5 33.5T62-102q-20 0-33.5-13.5T15-149v-197q0-20 13.5-33.5T62-393h196q20 0 33.5 13.5T305-346q0 20-13.5 33.5T258-299h-91q55 88 138 135t182 47q108 0 196.5-59.5T816-334q9-23 25-35.5t38-6.5q21 6 29.5 24.5T908-313q-51 131-165 211T487-22q-116 0-213-51T109-220M62-526q-21 0-32.5-15T23-576q7-46 23.5-83.5T89-735q11-19 30.5-21.5T154-745q15 16 15.5 36.5T160-668q-15 23-24 45.5T121-574q-7 22-22 35t-37 13m376-373q0 23-13.5 37.5T390-840q-28 6-51.5 16.5T291-798q-20 10-40.5 8T215-807q-15-15-12.5-34t20.5-31q39-27 78.5-43.5T388-940q20-4 35 8t15 33m305 92q-15 17-35.5 17T667-801q-24-14-46.5-24.5T571-841q-22-6-35-20.5T523-899q0-21 15-33t35-8q45 9 83.5 24.5T733-874q19 13 22 32.5T743-807m154 282q-22 0-37-13.5T839-574q-6-27-16.5-50.5T796-671q-10-20-9.5-39.5T801-746q15-15 34-13.5t30 19.5q27 38 45 77t27 86q5 21-6.5 36.5T897-525" />
  </Svg>
);
