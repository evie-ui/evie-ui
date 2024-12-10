import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDialogsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M302-251h356q20 0 33.5-13.5T705-298v-364q0-20-13.5-34T658-710H302q-20 0-33.5 14T255-662v364q0 20 13.5 33.5T302-251M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95z" />
  </Svg>
);
