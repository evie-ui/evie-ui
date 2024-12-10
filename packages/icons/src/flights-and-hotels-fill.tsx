import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlightsAndHotelsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M344-220q-32 0-53.5-21.5T269-295q0-32 21.5-53.5T344-370q32 0 53.5 21.5T419-295q0 32-21.5 53.5T344-220M176.5-17q-20.5 0-34-13.5T129-64v-320q0-19.875 13.5-33.938Q156-432 176.5-432t34 14.062Q224-403.875 224-384v193h241v-135q0-19.875 13.5-33.938Q492-374 512-374h224q39.463 0 67.231 27.769Q831-318.462 831-279v215q0 20-13.5 33.5t-34 13.5q-20.5 0-34-13.5T736-64v-33H224v33q0 20-13.5 33.5t-34 13.5M513-648l-96 95 9 57q0 7-2.5 14t-7 11l-5.5 5q-10 10-24 8.5T365-471l-42-68.634L248-580q-11-6-13-17.5t7-20.5l11-11q2-2 22-7l64 10 100-99-184-92q-15-8-18-24.5t9-28.5l10-9q5.062-5.375 13.531-7.688Q278-889 287.023-886.97L544-824l101-103q16.217-15 39.109-16.5Q707-945 724-929q15 16.217 14 38.109Q737-869 722-854L620-752l62 246q2 10.125-.917 19.875Q678.167-476.375 671-470l-5 5q-14 13-31.781 10.4Q616.438-457.2 607-473z" />
  </Svg>
);
