import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoCrash = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-860 94-93q14-14 33-14t33 14q14 14 14 32.5T640-887L513-761q-14.182 14-33.091 14T447-761l-63-63q-14-14-14.5-32.5t13.109-32.5q14.724-14 34.524-14T451-889zM95-31v-315q0-6.667 1-14.333Q97-368 100-375l76-229q9-29 33.25-46.5T264-668h432q30.5 0 54.75 17.5T785-604l75 229q3 7 4.5 14.667Q866-352.667 866-346v316q0 22.083-15.75 37.542Q834.5 23 812 23q-22 0-38-16.208Q758-9.417 758-31v-30H202v31q0 22.083-15.527 37.542Q170.946 23 148.765 23 126 23 110.5 6.792 95-9.417 95-31m119-385h533l-52-157H265zm-25 60v201zm101.765 155Q313-201 329-216.75T345-255q0-23.333-16.25-39.667Q312.5-311 291-311q-24.333 0-40.167 16.265Q235-278.471 235-255.235 235-232 250.765-216.5q15.764 15.5 40 15.5M671-201q23.333 0 39.667-15.75Q727-232.5 727-255q0-23.333-16.265-39.667Q694.471-311 671.235-311 648-311 632.5-294.735q-15.5 16.264-15.5 39.5Q617-232 632.75-216.5T671-201m-482 46h582v-201H189z" />
  </Svg>
);
