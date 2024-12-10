import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenLockPortrait = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M390-320q-13 0-21.5-8.5T360-350v-140q0-13 8.5-21.5T390-520h10v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h10q13 0 21.5 8.5T600-490v141q0 11.941-8.823 20.471Q582.353-320 570-320zm40-200h100v-40q0-20-15-33.5T480-607q-20 0-35 13.513-15 13.512-15 33.487zM271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-124v30h418v-30zm0-60h418v-558H271zm0-618h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);
