import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNextWeekFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-450q0-39.463 27.475-67.231Q109.95-734 149-734h148v-100q0-38 27.475-66T391-928h178q39.05 0 66.525 28Q663-872 663-834v100h148q39.463 0 67.231 27.769Q906-678.463 906-639v450q0 39.05-27.769 66.525Q850.463-95 811-95zm242-639h178v-100H391zm117 320L408-314q-8 8-8.5 17.5T408-278q8.267 8 17.633 8Q435-270 444-278l103-102q14-14.364 14-34.182T547-448L443-552q-8-7-17.5-7.5T407-552q-8 8.511-8 18.256Q399-524 407-515z" />
  </Svg>
);
