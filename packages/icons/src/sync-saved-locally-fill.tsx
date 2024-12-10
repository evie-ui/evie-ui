import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSyncSavedLocallyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m437-522-52-52q-14-14-32.8-13-18.8 1-33.2 15-15 14-15 33t14 34l85 84q14.364 14 34.182 14T471-421l188-170q0-18-3-35.5T640-657q-14.4-14-34.2-14-19.8 0-33.8 14zM17-83v-72h891q15.15 0 25.075 10.5Q943-134 943-118.895q0 15.106-9.925 25.5Q923.15-83 908-83zm132-132q-39.05 0-66.525-27.475Q55-269.95 55-309v-462q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v462q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
