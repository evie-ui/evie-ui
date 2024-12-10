import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoorbell3P = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M260-46q-38.775 0-66.388-27.612Q166-101.225 166-140v-680q0-39.188 27.612-67.094Q221.225-915 260-915h440q39.188 0 67.094 27.906Q795-859.188 795-820v680q0 38.775-27.906 66.388Q739.188-46 700-46zm0-94h440v-680H260zm219.867-49Q518-189 544.5-215.367q26.5-26.368 26.5-64.5Q571-318 544.633-344.5q-26.367-26.5-64.5-26.5Q442-371 415.5-344.633q-26.5 26.368-26.5 64.5Q389-242 415.367-215.5q26.368 26.5 64.5 26.5m-.078-52q-15.414 0-27.101-11.898Q441-264.796 441-280.711q0-15.914 11.898-27.101Q464.796-319 480.711-319q15.914 0 27.101 11.273Q519-296.454 519-279.789q0 15.414-11.273 27.101Q496.454-241 479.789-241M480-419q13.5 0 21.75-8.25T510-449h-60q0 14 8.25 22t21.75 8m-134-60h268q10.4 0 18.2-7.5Q640-494 640-505t-7.8-18.5q-7.8-7.5-18.2-7.5h-24v-81q0-45-19.5-75.5T509-730.316v-11.316q0-12.618-8.5-20.493Q492-770 480-770t-20.5 7.875q-8.5 7.875-8.5 20.466v11.293Q409-715 389.5-686T370-612v81h-24q-10.4 0-18.2 7.5Q320-516 320-505t7.8 18.5q7.8 7.5 18.2 7.5m-86 339v-680z" />
  </Svg>
);